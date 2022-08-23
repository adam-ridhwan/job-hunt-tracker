import React, { useContext, useEffect, useRef, useState } from 'react';
import jobInput, { HEADER_TITLES } from '../../../../Data';
import { SearchContext } from '../../../Contexts/SearchContext';
import './Sort.styles.css';

const DEFAULT_JOB_INPUT = [...jobInput];
const DROPDOWN_SELECTION_HEIGHT = 28;

const SortComponent = () => {
  const { sortValue, setSortValue, setSortedEntries } =
    useContext(SearchContext);

  const [searchSelection, setSearchSelection] = useState('');
  const [selection, setSelection] = useState(HEADER_TITLES);
  const [filteredTitles, setFilteredTitles] = useState(selection);
  const [isFocused, setIsFocused] = useState(true);

  const selectionSearchRef = useRef();

  useEffect(() => {
    /* https://www.youtube.com/watch?v=S-VeYcOCFZw&t=657s&ab_channel=WebDevSimplified */
    const handleDropdown = event => {
      const isDropdownButton = event.target.matches('[data-dropdown-button]');
      const background = document.querySelector('[data-background]');

      if (!isDropdownButton && event.target.closest('[data-dropdown]') !== null)
        return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = event.target.closest('[data-dropdown]');
        selectionSearchRef.current.focus();
        currentDropdown.classList.toggle('active');
        background.classList.toggle('active');
      }

      document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        selectionSearchRef.current.value = '';
        setFilteredTitles(HEADER_TITLES);
        dropdown.classList.remove('active');
        background.classList.remove('active');
      });
    };
    document.addEventListener('click', handleDropdown);

    return () => {
      document.removeEventListener('click', handleDropdown);
    };
  }, []);

  useEffect(() => {
    const filteredSelections = selection.filter(title => {
      return title.toLocaleLowerCase().includes(searchSelection);
    });
    setFilteredTitles(filteredSelections);
  }, [searchSelection, selection]);

  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchSelection(searchFieldString);
  };

  const handleClickSortAscending = () => {
    setSortValue('ascending');
  };

  const handleClickSortDescending = () => {
    setSortValue('descending');
  };

  const handleClickResetSort = () => {
    if (sortValue !== 'default') {
      setSortValue('default');
      setSortedEntries([...DEFAULT_JOB_INPUT]);
    }
  };

  //*
  const [chosenFilterSelection, setChosenFilterSelection] = useState();
  const handleKeyClick = index => {
    setChosenFilterSelection(filteredTitles[index]);
  };

  useEffect(() => {
    if (chosenFilterSelection === undefined) return;
  }, [chosenFilterSelection]);

  //*
  const [indexOfTitle, setIndexOfTitle] = useState(0);

  const handleMouseEnter = index => {
    setIndexOfTitle(index);
  };

  useEffect(() => {
    setIndexOfTitle(0);
  }, [filteredTitles]);

  return (
    <>
      <div className='layer-container' data-background />

      <div className='sort-container'>
        <div className='sort-dropdown-menu' data-dropdown>
          <button className='sort-link' data-dropdown-button>
            Sort
          </button>

          <div className='sort-dropdown-content'>
            <div className='dropdown-input-searchbar'>
              <input
                id='selectionSearchId'
                ref={selectionSearchRef}
                type='search'
                placeholder='Sort by...'
                onChange={handleSearchChange}
              />
            </div>

            <div className='dropdown-selection-container'>
              {filteredTitles.length > 0 ? (
                filteredTitles.map((title, index) => {
                  return (
                    <div
                      id='selection-title'
                      key={index}
                      role='button'
                      className='dropdown-selection'
                      style={{
                        background:
                          index === indexOfTitle
                            ? 'rgba(55, 53, 47, 0.08)'
                            : '',
                      }}
                      onClick={() => handleKeyClick(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      <p>{title}</p>
                    </div>
                  );
                })
              ) : (
                <p className='no-results-found'>No results found</p>
              )}
            </div>

            {/* <button onClick={handleClickSortAscending}>Ascending</button>
          <button onClick={handleClickSortDescending}>Descending</button>
          <button onClick={handleClickResetSort}>Reset</button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SortComponent;

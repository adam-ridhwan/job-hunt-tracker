import React, { useContext, useEffect, useRef, useState } from 'react';
import jobInput, { HEADER_TITLES } from '../../../../Data';
import { SearchContext } from '../../../Contexts/SearchContext';
import { SortContext } from '../../../Contexts/SortContext';
import './Sort.styles.css';

const DEFAULT_JOB_INPUT = [...jobInput];
const DROPDOWN_SELECTION_HEIGHT = 28;

const SortComponent = () => {
  // =============================================================================
  //                            HOOK DECLARATIONS
  // =============================================================================
  const { sortValue, setSortValue, setSortedEntries } =
    useContext(SearchContext);

  const { chosenFilterSelection, setChosenFilterSelection } =
    useContext(SortContext);

  const [searchSelection, setSearchSelection] = useState('');
  const [selection, setSelection] = useState(HEADER_TITLES);
  const [filteredTitles, setFilteredTitles] = useState(selection);

  const selectionSearchRef = useRef();

  // =============================================================================
  //                               HANDLE DROPDOWN
  // =============================================================================
  useEffect(() => {
    // LINK OF TUTORIAL
    // https://www.youtube.com/watch?v=S-VeYcOCFZw&t=657s&ab_channel=WebDevSimplified

    const handleSortMenuDropdown = event => {
      const isDropdownButton = event.target.matches('[data-dropdown-button]');
      const background = document.querySelector('[data-background]');

      if (!isDropdownButton && event.target.closest('[data-dropdown]') !== null)
        return;

      let currentDropdown;
      if (isDropdownButton && chosenFilterSelection === null) {
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
    document.addEventListener('click', handleSortMenuDropdown);

    return () => {
      document.removeEventListener('click', handleSortMenuDropdown);
    };
  }, [chosenFilterSelection]);

  // =============================================================================
  //                       HANDLE SEARCH SELECTION FILTER
  // =============================================================================
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

  // =============================================================================
  //                   HANDLE CLICK ON SELECTION SEARCH INPUT
  // TODO: Create a dropdown button of user's selection of sort option
  // =============================================================================
  const handleKeyClick = index => {
    setChosenFilterSelection(filteredTitles[index]);
    const background = document.querySelector('[data-background]');
    const currentDropdown = document.querySelector('[data-dropdown]');
    currentDropdown.classList.remove('active');
    background.classList.remove('active');
  };

  useEffect(() => {
    if (chosenFilterSelection === undefined) return;
    // console.log(chosenFilterSelection);
  }, [chosenFilterSelection]);

  // =============================================================================
  //                HANDLE BACKGROUND COLOR CHANGE ON MOUSE HOVER
  // =============================================================================
  const [indexOfTitle, setIndexOfTitle] = useState(0);

  const handleMouseEnter = index => {
    setIndexOfTitle(index);
  };

  useEffect(() => {
    setIndexOfTitle(0);
  }, [filteredTitles]);

  // =============================================================================
  //                     HANDLE SORT ASCENDING OR DESCENDING
  // =============================================================================
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

  // =============================================================================
  //                                   RENDER
  // =============================================================================
  return (
    <>
      <div className='layer-container' data-background />

      <div className='sort-container'>
        <div className='sort-dropdown-menu' data-dropdown>
          <button
            className='sort-link'
            data-dropdown-button
            style={{
              color: chosenFilterSelection
                ? 'rgb(46, 170, 220)'
                : 'rgba(55, 53, 47, 0.65)',
            }}
          >
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

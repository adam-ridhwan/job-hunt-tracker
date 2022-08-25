import React, { useContext, useEffect, useRef, useState } from 'react';
import { HEADER_TITLES } from '../../../../Data';
import { SearchContext } from '../../../Contexts/SearchContext';
import { SortContext } from '../../../Contexts/SortContext';
import './Sort.styles.css';

const DROPDOWN_SELECTION_HEIGHT = 28;

const SortComponent = () => {
  // =============================================================================
  //                            HOOK DECLARATIONS
  // =============================================================================
  const { setSortValue } = useContext(SearchContext);
  const { chosenSortSelection, setChosenSortSelection } =
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

      // console.log('isDropdownButton', isDropdownButton);

      if (!isDropdownButton && event.target.closest('[data-dropdown]') !== null)
        return;

      let currentDropdown;
      if (isDropdownButton && chosenSortSelection === null) {
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
  }, [chosenSortSelection]);

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

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                  HANDLE CLICK ON SELECTION SEARCH INPUT
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const handleKeyClick = index => {
    setChosenSortSelection(filteredTitles[index]);
    const background = document.querySelector('[data-background]');
    const currentDropdown = document.querySelector('[data-dropdown]');
    setSortValue('Ascending');
    currentDropdown.classList.remove('active');
    background.classList.remove('active');
  };

  useEffect(() => {
    if (chosenSortSelection === undefined) return;
    // console.log(chosenSortSelection);
  }, [chosenSortSelection]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //               HANDLE BACKGROUND COLOR CHANGE ON MOUSE HOVER
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const [indexOfTitle, setIndexOfTitle] = useState(0);

  const handleMouseEnter = index => {
    setIndexOfTitle(index);
  };

  useEffect(() => {
    setIndexOfTitle(0);
  }, [filteredTitles]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                                  RENDER
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  return (
    <>
      <div className='layer-container' data-background />

      <div className='sort-container'>
        <div className='sort-dropdown-menu' data-dropdown>
          <button
            className='sort-link'
            data-dropdown-button
            style={{
              color: chosenSortSelection
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

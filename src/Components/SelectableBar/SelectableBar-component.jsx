import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../Contexts/SearchContext';

import jobInput from '../../Data';
import { selectableBarIcons } from '../../Icons/Icons';
import './SelectableBar-styles.css';
const { searchIcon, allAppsIcon, calendarIcon, plusIcon, clearIcon } =
  selectableBarIcons;

const STYLES = {
  border: {
    borderBottom: '2px solid rgb(55, 53, 47)',
  },
  fontColor: {
    color: 'rgb(55, 53, 47)',
  },
  logoColor: {
    fill: 'rgb(55, 53, 47)',
  },
};

const DEFAULT_JOB_INPUT = [...jobInput];

const SelectableBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const inputRef = useRef();

  const {
    sortValue,
    setSortValue,
    setSortedEntries,
    sortedEntries,
    searchField,
    setSearchField,
    setFilteredEntries,
  } = useContext(SearchContext);

  useEffect(() => {
    if (sortValue === 'ascending') {
      setSortedEntries(
        sortedEntries.sort((a, b) => {
          const nameA = a.company.toUpperCase();
          const nameB = b.company.toUpperCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
      );
    }

    if (sortValue === 'descending') {
      setSortedEntries(
        sortedEntries.sort((a, b) => {
          const nameA = a.company.toUpperCase();
          const nameB = b.company.toUpperCase();

          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        })
      );
    }

    const newFilteredEntry = sortedEntries.filter(entry => {
      return entry.company.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEntries(newFilteredEntry);
  }, [searchField, sortValue]);

  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
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

  const focusBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const defocusInput = () => {
    setTimeout(() => {
      setShowSearchBar(false);
    }, 600);
  };

  useEffect(() => {
    if (showSearchBar) {
      inputRef.current.focus();
    }
  }, [showSearchBar]);

  useEffect(() => {
    document.addEventListener('click', e => {
      const isDropdownButton = e.target.matches('[data-dropdown-button]');
      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
        return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
      }

      document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
      });
    });
  });

  return (
    <div className='selectableBar-container'>
      <div>
        <div
          className='selectableBar-individual'
          style={Object.assign(STYLES.border)}
        >
          <div>{allAppsIcon}</div>
          <span
            style={Object.assign(STYLES.fontColor)}
            className='selectable-bar-left'
          >
            All Applications
          </span>
        </div>
        <div className='selectableBar-individual'>
          <div>{calendarIcon}</div>
          <span className='selectable-bar-left'>Calendar</span>
        </div>
      </div>

      <div className='selectableBar-adjustments'>
        <div className='main-search'>
          <div className='search-container'>
            <span>Filter</span>
            {/* start sort */}
            <div className='sort-dropdown-menu' data-dropdown>
              <span className='sort-link' data-dropdown-button>
                Sort
              </span>
              <div className='sort-dropdown-content'>
                <button onClick={handleClickSortAscending}>Ascending</button>
                <button onClick={handleClickSortDescending}>Descending</button>
                <button onClick={handleClickResetSort}>Reset</button>
              </div>
            </div>
            {/* end sort */}
            <span className='search-icon' onClick={focusBar}>
              {searchIcon}
            </span>

            {showSearchBar ? (
              <div className='search-navigation'>
                <input
                  ref={inputRef}
                  id='searchBar'
                  type='search'
                  placeholder='Type to search...'
                  aria-label='search'
                  className='search-bar'
                  onChange={handleSearchChange}
                  onBlur={defocusInput}
                  required
                />
              </div>
            ) : (
              ''
            )}
          </div>
        </div>

        <button className='new-entry__button'>
          <p>New</p>
          {plusIcon}
        </button>
      </div>

      {/* <div className='sort-container'>
        <button onClick={handleClickSortAscending}>Sort Ascending</button>
        <button onClick={handleClickSortDescending}>Sort Descending</button>
        <button onClick={handleClickResetSort}>Reset Sort</button>
      </div> */}
    </div>
  );
};

export default SelectableBar;

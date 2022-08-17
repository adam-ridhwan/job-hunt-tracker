import { useContext, useEffect } from 'react';
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
    console.log('sorting');

    if (sortValue === 'ascending') {
      // console.log(sort);
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
      // console.log(sort);
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

    console.log(newFilteredEntry);
    setFilteredEntries(newFilteredEntry);
  }, [
    searchField,
    sortedEntries,
    setFilteredEntries,
    setSortedEntries,
    sortValue,
  ]);

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
    setSortValue('default');
    setSortedEntries([...DEFAULT_JOB_INPUT]);
  };

  return (
    <div className='selectableBar-container'>
      <div>
        <div
          className='selectableBar-individual'
          style={Object.assign(STYLES.border)}
        >
          {allAppsIcon}
          <span style={Object.assign(STYLES.fontColor)}>All Applications</span>
        </div>
        <div className='selectableBar-individual'>
          {calendarIcon}
          <span>Calendar</span>
        </div>
      </div>

      <div className='selectableBar-adjustments'>
        <div className='main-search'>
          <div className='search-container'>
            <span>Filter</span>
            <span>Sort</span>

            {/* <span className='search-icon' onClick={toggleSearch}>
              {searchIcon}
            </span> */}
            <div className='search-navigation'>
              <input
                id='customx'
                type='search'
                placeholder='Search'
                ariaaria-label='search'
                className='search-bar'
                onChange={handleSearchChange}
                required
              />
            </div>
          </div>
        </div>

        <button className='new-entry__button'>
          <p>New</p>
          {plusIcon}
        </button>
      </div>

      <div className='sort-container'>
        <button onClick={handleClickSortAscending}>Sort Ascending</button>
        <button onClick={handleClickSortDescending}>Sort Descending</button>
        <button onClick={handleClickResetSort}>Reset Sort</button>
      </div>
    </div>
  );
};

export default SelectableBar;

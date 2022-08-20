import { useContext, useEffect } from 'react';
import { SearchContext } from '../Contexts/SearchContext';
import { StickyContext } from '../Contexts/StickyContext';

import { selectableBarIcons } from '../../Icons/Icons';
import './SelectableBar-styles.css';

import { useInView } from 'react-intersection-observer';

import FilterComponent from './Mappings/Filter/Filter.component';
import SearchComponent from './Mappings/Search/Search.component';
import SortComponent from './Mappings/Sort/Sort.component';

const { allAppsIcon, calendarIcon, plusIcon } = selectableBarIcons;

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

const SelectableBar = () => {
  const { myRef } = useContext(StickyContext);

  const {
    sortValue,
    setSortedEntries,
    sortedEntries,
    searchField,
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
    <div className='routings-container' ref={myRef}>
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

      <div className='mappings-container'>
        <FilterComponent />
        <SortComponent />
        <SearchComponent />
        <button className='new-entry__button'>
          <p>New</p>
          {plusIcon}
        </button>
      </div>
    </div>
  );
};

export default SelectableBar;

import { useContext, useEffect } from 'react';
import { SearchContext } from '../Contexts/SearchContext';

import { selectableBarIcons } from '../../Icons/Icons';
import './SelectableBar-styles.css';

import FilterComponent from './Mappings/Filter/Filter.component';
import NewEntryButton from './Mappings/NewEntryButton/NewEntryButton.component';
import SearchComponent from './Mappings/Search/Search.component';

import SortComponent from './Mappings/Sort/Sort.component';

const { allAppsIcon } = selectableBarIcons;

const SelectableBar = () => {
  const {
    sortValue,
    setSortedEntries,
    sortedEntries,
    searchField,
    setFilteredEntries,
  } = useContext(SearchContext);

  useEffect(() => {
    if (sortValue === 'Ascending') {
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

    if (sortValue === 'Descending') {
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

  return (
    <div className='routings-container'>
      <div className='routings-container-margin'>
        <div className='routing-container'>
          <div>{allAppsIcon}</div>
          <span className='routing-title'>All Applications</span>
        </div>
      </div>

      <div className='mappings-container'>
        <FilterComponent />
        <SortComponent />
        <SearchComponent />
        <NewEntryButton />
      </div>
    </div>
  );
};

export default SelectableBar;

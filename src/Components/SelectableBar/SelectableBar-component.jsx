import { useContext, useEffect } from 'react';
import { SearchContext } from '../../Contexts/SearchContext';
import { SortContext } from '../../Contexts/SortContext';

import FilterComponent from './Mappings/Filter/Filter.component';
import NewEntryButton from './Mappings/NewEntryButton/NewEntryButton.component';
import SearchComponent from './Mappings/Search/Search';
import SortComponent from './Mappings/Sort/Sort';

import { selectableBarIcons } from '../../Icons/Icons';
import './SelectableBar-styles.css';

const { allAppsIcon } = selectableBarIcons;

const SelectableBar = () => {
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             HOOK DECLARATION
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const {
    sortValue,
    setSortedEntries,
    sortedEntries,
    searchField,
    setFilteredEntries,
  } = useContext(SearchContext);

  const { chosenSortSelection } = useContext(SortContext);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                    HANDLE SORTING ASCENDING/DESCENDING
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  useEffect(() => {
    let key;

    if (chosenSortSelection) {
      key = chosenSortSelection.toLowerCase();
      // 'Descending'log(key, Boolean(key.match(/^[A-Za-z]*$/)));
    }

    // 'Descending'log(key);
    // 'Descending'log(chosenSortSelection);

    if (sortValue === 'Ascending') {
      setSortedEntries(
        sortedEntries.sort((a, b) => {
          const nameA = a[key].toUpperCase();
          const nameB = b[key].toUpperCase();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
      );
    }

    if (sortValue === 'Descending') {
      setSortedEntries(
        sortedEntries.sort((a, b) => {
          const nameA = a[key].toUpperCase();
          const nameB = b[key].toUpperCase();

          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        })
      );
    }

    let newFilteredEntry;
    key
      ? (newFilteredEntry = sortedEntries.filter(entry =>
          entry[key].toLocaleLowerCase().includes(searchField)
        ))
      : (newFilteredEntry = sortedEntries.filter(entry =>
          entry.company.toLocaleLowerCase().includes(searchField)
        ));

    setFilteredEntries(newFilteredEntry);
  }, [chosenSortSelection, searchField, sortValue]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                                  RENDER
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
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

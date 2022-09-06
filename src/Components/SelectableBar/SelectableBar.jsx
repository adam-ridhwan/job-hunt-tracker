import { useContext, useEffect } from 'react';
import { SearchContext } from '../../Contexts/SearchContext';
import { SortContext } from '../../Contexts/SortContext';

import FilterButton from './Buttons/FilterButton/FilterButton';
import NewEntryButton from './Buttons/NewEntryButton/NewEntryButton';
import SearchButton from './Buttons/SearchButton/SearchButton';
import SortButton from './Buttons/SortButton/View/SortButton';

import { selectableBarIcons } from '../../Icons/Icons';

import './SelectableBar.css';

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
    let firstIndexOfSortArray;

    if (chosenSortSelection.length > 0) {
      firstIndexOfSortArray = chosenSortSelection[0].toLowerCase();
      // 'Descending'log(firstIndexOfSortArray, Boolean(firstIndexOfSortArray.match(/^[A-Za-z]*$/)));
    }

    if (sortValue === 'Ascending') {
      setSortedEntries(
        sortedEntries.sort((a, b) => {
          const nameA = a[firstIndexOfSortArray].toUpperCase().trim();
          const nameB = b[firstIndexOfSortArray].toUpperCase().trim();

          if (nameA < nameB) return -1;
          if (nameA > nameB) return 1;
          return 0;
        })
      );
    }

    if (sortValue === 'Descending') {
      setSortedEntries(
        sortedEntries.sort((a, b) => {
          const nameA = a[firstIndexOfSortArray].toUpperCase().trim();
          const nameB = b[firstIndexOfSortArray].toUpperCase().trim();

          if (nameA > nameB) return -1;
          if (nameA < nameB) return 1;
          return 0;
        })
      );
    }

    let newFilteredEntry;
    firstIndexOfSortArray
      ? (newFilteredEntry = sortedEntries.filter(entry =>
          entry[firstIndexOfSortArray].toLocaleLowerCase().includes(searchField)
        ))
      : (newFilteredEntry = sortedEntries.filter(entry =>
          entry.company.toLocaleLowerCase().includes(searchField)
        ));

    setFilteredEntries(newFilteredEntry);
  }, [
    chosenSortSelection,
    searchField,
    setFilteredEntries,
    setSortedEntries,
    sortValue,
    sortedEntries,
  ]);

  return (
    <div className='routings-container'>
      <div className='routings-container-margin'>
        <div className='routing-container'>
          <div>{allAppsIcon}</div>
          <span className='routing-title'>All Applications</span>
        </div>
      </div>

      <div className='mappings-container'>
        <FilterButton />
        <SortButton />
        <SearchButton />
        <NewEntryButton />
      </div>
    </div>
  );
};

export default SelectableBar;

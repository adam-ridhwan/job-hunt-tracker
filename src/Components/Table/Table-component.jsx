import { useEffect, useState } from 'react';
import jobInput from '../../Data';
import { bodyIcons, headerIcons } from '../../Icons/Icons';
import CountEntries from '../../Utilities/CountEntries';
import './Table-styles.css';

const HEADER_TITLES = [
  'Company',
  'Stage',
  'Interview Date',
  'Postion',
  'Location',
  'Posting URL',
  'Point of Contact',
  'Contact Info',
  'Date Applied',
];

const DEFAULT_JOB_INPUT = [...jobInput];

const Table = () => {
  const [searchField, setSearchField] = useState('');
  const [entries, setEntries] = useState(jobInput);
  const [sortedEntries, setSortedEntries] = useState(entries);
  const [filteredEntries, setFilteredEntries] = useState(sortedEntries);
  const [sortValue, setSortValue] = useState();

  useEffect(() => {
    // console.log('main', sort);
    // console.log('sorting');

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

    console.log('filtering');
    console.log(sortedEntries);
    const newFilteredEntry = sortedEntries.filter(entry => {
      return entry.company.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEntries(newFilteredEntry);
  }, [entries, searchField, sortValue, sortedEntries]);

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
    console.log('reset button clicked');

    setSortValue('default');
    setSortedEntries([...DEFAULT_JOB_INPUT]);
  };

  return (
    <div>
      <form className='filter-input'>
        <input
          type='search'
          name='filter'
          placeholder='filter'
          onChange={handleSearchChange}
        />
      </form>

      <div className='sort-container'>
        <button onClick={handleClickSortAscending}>Sort Ascending</button>
        <button onClick={handleClickSortDescending}>Sort Descending</button>
        <button onClick={handleClickResetSort}>Reset Sort</button>
      </div>

      {/* headers */}
      <div className='header-container'>
        {HEADER_TITLES.map((title, index) => {
          return (
            <div className='table-header' key={index}>
              <div className='table-icon'>{headerIcons.alphabet}</div>
              <span className='table-label'>{title}</span>
            </div>
          );
        })}
      </div>

      <div className='body-container'>
        {/* Entries */}
        {filteredEntries.map(entry => {
          return (
            <div className='table-body' key={entry.id}>
              <div className='table-body-company'>
                {bodyIcons.pageIcon}
                <span>{entry.company}</span>
              </div>
              <div>{entry.stage}</div>
              <div>{entry.interviewDate}</div>
              <div>{entry.position}</div>
              <div>{entry.location}</div>
              <div>{entry.postingURL}</div>
              <div>{entry.pointOfContact}</div>
              <div>{entry.contactInfo}</div>
              <div>{entry.dateApplied}</div>
            </div>
          );
        })}
      </div>

      <div className='count-container'>
        <span>
          COUNT
          <CountEntries entries={filteredEntries} />
        </span>
      </div>
    </div>
  );
};

export default Table;

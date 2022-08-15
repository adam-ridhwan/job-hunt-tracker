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
  const [sort, setSort] = useState();

  useEffect(() => {
    console.log('main', sort);
    console.log('sorting');

    if (sort === 'default') {
      setSortedEntries(DEFAULT_JOB_INPUT);
      console.log('sorted entries', sortedEntries);
    }

    if (sort === 'ascending') {
      console.log(sort);
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

    if (sort === 'descending') {
      console.log(sort);
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
    const newFilteredEntry = sortedEntries.filter(entry => {
      return entry.company.toLocaleLowerCase().includes(searchField);
    });
    console.log('sorted entries', sortedEntries);
    console.log('new filtered entries', newFilteredEntry);

    setFilteredEntries(newFilteredEntry);
  }, [entries, searchField, sort, sortedEntries]);

  // console.log(filteredEntries);

  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const handleClickSortAscending = () => {
    setSort('ascending');
  };

  const handleClickSortDescending = () => {
    setSort('descending');
  };

  const handleClickResetSort = () => {
    console.log('reset button clicked');
    setSort('default');
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

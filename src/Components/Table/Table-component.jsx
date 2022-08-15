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

const Table = () => {
  const [searchField, setSearchField] = useState('');
  const [entries, setEntries] = useState(jobInput);
  const [filteredEntries, setFilteredEntries] = useState(entries);

  useEffect(() => {
    const newFilteredEntry = entries.filter(entry => {
      return entry.company.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEntries(newFilteredEntry);
  }, [entries, searchField]);

  const onSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };
  // console.log(searchField);

  return (
    <div>
      <form className='filter-input'>
        <input
          type='search'
          name='filter'
          placeholder='filter'
          onChange={onSearchChange}
        />
      </form>

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
              <div>
                {bodyIcons.pageIcon}
                {entry.company}
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

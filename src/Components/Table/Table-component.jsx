import { useContext } from 'react';
import { bodyIcons, headerIcons } from '../../Icons/Icons';
import CountEntries from '../../Utilities/CountEntries';
import EditableElement from '../../Utilities/EditableElement';
import { SearchContext } from '../Contexts/SearchContext';
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
  const { filteredEntries } = useContext(SearchContext);

  return (
    <div>
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
              <EditableElement>
                <div>{entry.stage}</div>
              </EditableElement>
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
        <div className='count-container'>
          <span>
            COUNT
            <CountEntries entries={filteredEntries} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Table;

import { useContext } from 'react';

import { bodyIcons, headerIcons } from '../../Icons/Icons';
import CountEntries from '../../Utilities/CountEntries';
import EditableElement from '../../Utilities/EditableElement';
import { SearchContext } from '../Contexts/SearchContext';

import { HEADER_TITLES } from '../../Data';

import './Table-styles.css';

const Table = () => {
  const { filteredEntries } = useContext(SearchContext);

  return (
    <>
      <div className='main-container'>
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

        {/* Entries */}
        <div className='body-container'>
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
        </div>
      </div>

      <div className='count-container'>
        <div className='count-container-margin'>
          <span>
            COUNT
            <CountEntries entries={filteredEntries} />
          </span>
        </div>
      </div>
    </>
  );
};

export default Table;

import { useContext, useEffect, useRef, useState } from 'react';

import { bodyIcons, headerIcons } from '../../Icons/Icons';
import CountEntries from '../../Utilities/CountEntries';
import EditableElement from '../../Utilities/EditableElement';
import { SearchContext } from '../Contexts/SearchContext';
import { StickyContext } from '../Contexts/StickyContext';
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
  const { myElementIsVisible } = useContext(StickyContext);

  const { filteredEntries } = useContext(SearchContext);
  const prevScrollY = useRef(0);
  const [goingUp, setGoingup] = useState();
  const [currentScrollY, setCurrentScrollY] = useState(0);

  useEffect(() => {
    // https://codesandbox.io/s/react-setstate-from-event-listener-q7to8?file=/src/App.js
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) setGoingup(false);
      if (prevScrollY.current > currentScrollY && !goingUp) setGoingup(true);
      console.log(currentScrollY);

      if (!myElementIsVisible) {
        prevScrollY.current = currentScrollY;
        setCurrentScrollY(prevScrollY.current - 145);
      }

      if (myElementIsVisible) {
        console.log(currentScrollY);

        setCurrentScrollY(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingUp, myElementIsVisible]);

  return (
    <>
      <div className='main-container'>
        {/* headers */}
        <div
          className='header-container'
          style={{ transform: `translate3d(0px, ${currentScrollY}px, 0px` }}
        >
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
        <span>
          COUNT
          <CountEntries entries={filteredEntries} />
        </span>
      </div>
    </>
  );
};

export default Table;

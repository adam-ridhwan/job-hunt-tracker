import { useContext } from 'react';
import { SearchContext } from '../../Contexts/SearchContext';
import { SortContext } from '../../Contexts/SortContext';

import { bodyIcons, headerIcons } from '../../Icons/Icons';
import CountEntries from '../../Utilities/CountEntries';

import SortSelectionComponent from '../SelectableBar/Buttons/SortButton/View/SortSelection';

import { HEADER_TITLES } from '../../Data';

import { THEME_COLORS } from '../../Data';

import './Table.css';

const stageCOLORS = {
  Applied: THEME_COLORS.Orange,
  Interview: THEME_COLORS.Yellow,
  Rejected: THEME_COLORS.Red,
  Offered: THEME_COLORS.Blue,
  Signed: THEME_COLORS.Green,
};

const Table = () => {
  const { filteredEntries } = useContext(SearchContext);
  const { chosenSortSelection } = useContext(SortContext);

  return (
    <>
      {chosenSortSelection ? <SortSelectionComponent /> : ''}

      <div className='main-container'>
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
          {filteredEntries.map(entry => {
            return (
              <div className='table-body' key={entry.id}>
                <div className='table-body-company'>
                  {bodyIcons.pageIcon}
                  <span>{entry.company}</span>
                </div>
                <div>
                  <span
                    className='option-dropdown'
                    style={{
                      background: stageCOLORS[entry.stage],
                    }}
                  >
                    {entry.stage}
                  </span>
                </div>
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

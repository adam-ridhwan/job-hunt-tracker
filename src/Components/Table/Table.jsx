import { useContext } from 'react';
import { SearchContext } from '../../Contexts/SearchContext';
import { SortContext } from '../../Contexts/SortContext';

import { bodyIcons, headerIcons } from '../../Icons/Icons';
import CountEntries from '../../Utilities/CountEntries';

import SortSelectionComponent from '../SelectableBar/Buttons/SortButton/View/SortSelection';

import { HEADER_TITLES } from '../../Data';

import './Table.css';

const colors = {
  LightGray: 'rgba(227, 226, 224, 0.5)',
  Gray: 'rgba(227, 226, 224, 0.5)',
  Brown: 'rgb(238, 224, 218)',
  Orange: 'rgb(250, 222, 201)',
  Yellow: 'rgb(253, 236, 200)',
  Green: 'rgb(219, 237, 219)',
  Blue: 'rgb(211, 229, 239)',
  Purple: 'rgb(232, 222, 238)',
  Pink: 'rgb(245, 224, 233)',
  Red: 'rgb(255, 226, 221)',
};

const stageColors = {
  Applied: colors.Orange,
  Interview: colors.Yellow,
  Rejected: colors.Red,
  Offered: colors.Blue,
  Signed: colors.Green,
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
                      background: stageColors[entry.stage],
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

import { useState } from 'react';
import { selectableBarIcons } from '../../Icons/Icons';
import './SelectableBar-styles.css';

const { searchIcon, allAppsIcon, calendarIcon, plusIcon, clearIcon } =
  selectableBarIcons;

const STYLES = {
  border: {
    borderBottom: '2px solid rgb(55, 53, 47)',
  },
  fontColor: {
    color: 'rgb(55, 53, 47)',
  },
  logoColor: {
    fill: 'rgb(55, 53, 47)',
  },
};

const customx = document.getElementById('customx');
console.log(customx);
console.log(customx);

const SelectableBar = () => {
  const clear = () => {
    const customx = document.getElementById('customx');
    customx.value = '';
  };

  return (
    <div className='selectableBar-container'>
      <div>
        <div
          className='selectableBar-individual'
          style={Object.assign(STYLES.border)}
        >
          {allAppsIcon}
          <span style={Object.assign(STYLES.fontColor)}>All Applications</span>
        </div>
        <div className='selectableBar-individual'>
          {calendarIcon}
          <span>Calendar</span>
        </div>
      </div>

      <div className='selectableBar-adjustments'>
        <div className='main-search'>
          <div className='search-container'>
            <span>Filter</span>
            <span>Sort</span>

            {/* <span className='search-icon' onClick={toggleSearch}>
              {searchIcon}
            </span> */}
            <div className='search-navigation'>
              <input
                id='customx'
                type='search'
                placeholder='Search'
                ariaaria-label='search'
                className='search-bar'
                required
              />
            </div>
          </div>
        </div>

        <button className='new-entry__button'>
          <p>New</p>
          {plusIcon}
        </button>
      </div>
    </div>
  );
};

export default SelectableBar;

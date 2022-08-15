import { selectableBarIcons } from '../../Icons/Icons';
import './SelectableBar-styles.css';

const { searchIcon, allAppsIcon, calendarIcon, plusIcon } = selectableBarIcons;

const styles = {
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

const SelectableBar = () => {
  return (
    <>
      <div className='selectableBar-container'>
        <div>
          <div
            className='selectableBar-individual'
            style={Object.assign(styles.border)}
          >
            {allAppsIcon}
            <span style={Object.assign(styles.fontColor)}>
              All Applications
            </span>
          </div>
          <div className='selectableBar-individual'>
            {calendarIcon}
            <span>Calendar</span>
          </div>
        </div>
        <div className='selectableBar-adjustments'>
          <span>Filter</span>
          <span>Sort</span>
          <span>{searchIcon}</span>
          <span className='new-entry__button'>
            <p>New</p>
            {plusIcon}
          </span>
        </div>
      </div>
    </>
  );
};

export default SelectableBar;

import jobInput from '../../Data';
import { bodyIcons, headerIcons } from '../../Icons/Icons';
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

let count = 0;
for (let entry in jobInput) {
  count = count + 1;
}

const Table = () => {
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
        {jobInput.map(input => {
          return (
            <div className='table-body' key={input.id}>
              <div>
                {bodyIcons.pageIcon}
                {input.company}
              </div>
              <div>{input.stage}</div>
              <div>{input.interviewDate}</div>
              <div>{input.position}</div>
              <div>{input.location}</div>
              <div>{input.postingURL}</div>
              <div>{input.pointOfContact}</div>
              <div>{input.contactInfo}</div>
              <div>{input.dateApplied}</div>
            </div>
          );
        })}
      </div>

      <div className='count-container'>
        <span>
          COUNT <b>{count}</b>
        </span>
      </div>
    </div>
  );
};

export default Table;

import jobInput from '../../Data';

import './Table.css';

const headerTitle = [
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
console.log(count); // 2

const Table = () => {
  return (
    <div>
      {/* headers */}
      <div className='header-container'>
        {headerTitle.map((title, index) => {
          return (
            <div className='table-header' key={index}>
              <div className='table-icon'>{icons.alphabet}</div>
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
              <div>{input.company}</div>
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

        <div className='count-container'>
          <span>
            COUNT <b>{count}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

const icons = {
  alphabet: (
    <svg
      viewBox='0 0 14 14'
      width='14px'
      height='14px'
      display='block'
      backface-visibility='hidden'
    >
      <path
        style={{ fill: 'rgba(55, 53, 47, 0.65)' }}
        d='M7.73943662,8.6971831 C7.77640845,8.7834507 7.81338028,8.8943662 7.81338028,9.00528169 C7.81338028,9.49823944 7.40669014,9.89260563 6.91373239,9.89260563 C6.53169014,9.89260563 6.19894366,9.64612676 6.08802817,9.30105634 L5.75528169,8.33978873 L2.05809859,8.33978873 L1.72535211,9.30105634 C1.61443662,9.64612676 1.2693662,9.89260563 0.887323944,9.89260563 C0.394366197,9.89260563 0,9.49823944 0,9.00528169 C0,8.8943662 0.0246478873,8.7834507 0.0616197183,8.6971831 L2.46478873,2.48591549 C2.68661972,1.90669014 3.24119718,1.5 3.90669014,1.5 C4.55985915,1.5 5.12676056,1.90669014 5.34859155,2.48591549 L7.73943662,8.6971831 Z M2.60035211,6.82394366 L5.21302817,6.82394366 L3.90669014,3.10211268 L2.60035211,6.82394366 Z M11.3996479,3.70598592 C12.7552817,3.70598592 14,4.24823944 14,5.96126761 L14,9.07922535 C14,9.52288732 13.6549296,9.89260563 13.2112676,9.89260563 C12.8169014,9.89260563 12.471831,9.59683099 12.4225352,9.19014085 C12.028169,9.6584507 11.3257042,9.95422535 10.5492958,9.95422535 C9.60035211,9.95422535 8.47887324,9.31338028 8.47887324,7.98239437 C8.47887324,6.58978873 9.60035211,6.08450704 10.5492958,6.08450704 C11.3380282,6.08450704 12.040493,6.33098592 12.4348592,6.81161972 L12.4348592,5.98591549 C12.4348592,5.38204225 11.9172535,4.98767606 11.1285211,4.98767606 C10.6602113,4.98767606 10.2411972,5.11091549 9.80985915,5.38204225 C9.72359155,5.43133803 9.61267606,5.46830986 9.50176056,5.46830986 C9.18133803,5.46830986 8.91021127,5.1971831 8.91021127,4.86443662 C8.91021127,4.64260563 9.0334507,4.44542254 9.19366197,4.34683099 C9.87147887,3.90316901 10.6232394,3.70598592 11.3996479,3.70598592 Z M11.1778169,8.8943662 C11.6830986,8.8943662 12.1760563,8.72183099 12.4348592,8.37676056 L12.4348592,7.63732394 C12.1760563,7.29225352 11.6830986,7.11971831 11.1778169,7.11971831 C10.5616197,7.11971831 10.056338,7.45246479 10.056338,8.0193662 C10.056338,8.57394366 10.5616197,8.8943662 11.1778169,8.8943662 Z M0.65625,11.125 L13.34375,11.125 C13.7061869,11.125 14,11.4188131 14,11.78125 C14,12.1436869 13.7061869,12.4375 13.34375,12.4375 L0.65625,12.4375 C0.293813133,12.4375 4.43857149e-17,12.1436869 0,11.78125 C-4.43857149e-17,11.4188131 0.293813133,11.125 0.65625,11.125 Z'
      ></path>
    </svg>
  ),
};

export default Table;

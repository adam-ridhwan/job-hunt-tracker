import { Fragment } from 'react';
import jobInput from '../../Data';
import icons from '../../Icons/Icons';
import './Table.css';

const Table = () => {
  return (
    <div className='table-container'>
      <table>
        <thead>
          <tr>
            <th>
              <div className='table-header'>
                <div className='table-icon'>{icons.companyIcon}</div>
                <div className='table-label'>Company</div>
              </div>
            </th>
            <th>Stage</th>
            <th>Position</th>
            <th>Location</th>
            <th>Point of Contact</th>
            <th>Contact Info</th>
            <th>Date Applied</th>
            <th>Notes</th>
          </tr>
        </thead>

        <tbody>
          {jobInput.map((input, index) => {
            return (
              <tr className='table-row' key={index}>
                <td>{input.Company}</td>
                <td>{input.Stage}</td>
                <td>{input.Position}</td>
                <td>{input.Location}</td>
                <td>{input.PointOfContact}</td>
                <td>{input.ContactInfo}</td>
                <td>{input.DateApplied}</td>
                <td>{input.Notes}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

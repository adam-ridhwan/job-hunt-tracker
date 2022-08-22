import { useContext } from 'react';
import jobInput from '../../../../Data';
import { SearchContext } from '../../../Contexts/SearchContext';
import './Sort.styles.css';

const DEFAULT_JOB_INPUT = [...jobInput];

const SortComponent = () => {
  const { sortValue, setSortValue, setSortedEntries } =
    useContext(SearchContext);

  const handleClickSortAscending = () => {
    setSortValue('ascending');
  };

  const handleClickSortDescending = () => {
    setSortValue('descending');
  };

  const handleClickResetSort = () => {
    if (sortValue !== 'default') {
      setSortValue('default');
      setSortedEntries([...DEFAULT_JOB_INPUT]);
    }
  };
  return (
    <div className='sort-container'>
      <div className='sort-dropdown-menu' data-dropdown>
        <span className='sort-link' data-dropdown-button>
          Sort
        </span>
        <div className='sort-dropdown-content'>
          <button onClick={handleClickSortAscending}>Ascending</button>
          <button onClick={handleClickSortDescending}>Descending</button>
          <button onClick={handleClickResetSort}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default SortComponent;

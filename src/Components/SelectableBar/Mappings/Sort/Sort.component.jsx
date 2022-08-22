import { useContext, useEffect } from 'react';
import jobInput, { HEADER_TITLES } from '../../../../Data';
import { SearchContext } from '../../../Contexts/SearchContext';
import './Sort.styles.css';

const DEFAULT_JOB_INPUT = [...jobInput];

const DROPDOWN_SELECTION_HEIGHT = 28;

const SortComponent = () => {
  const { sortValue, setSortValue, setSortedEntries } =
    useContext(SearchContext);

  useEffect(() => {
    document.addEventListener('click', e => {
      const isDropdownButton = e.target.matches('[data-dropdown-button]');
      if (!isDropdownButton && e.target.closest('[data-dropdown]') != null)
        return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
      }

      document.querySelectorAll('[data-dropdown]').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
      });
    });
  });

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
        <button className='sort-link' data-dropdown-button>
          Sort
        </button>

        <div className='sort-dropdown-content'>
          <div className='dropdown-input-searchbar'>
            <input placeholder='Sort by...' type='text' />
          </div>

          <div className='dropdown-selection-container'>
            {HEADER_TITLES.map(title => {
              return (
                <div
                  role='button'
                  className='dropdown-selection'
                  style={{
                    height: `${DROPDOWN_SELECTION_HEIGHT}px`,
                  }}
                >
                  <p>{title}</p>
                </div>
              );
            })}
          </div>

          {/* <button onClick={handleClickSortAscending}>Ascending</button>
          <button onClick={handleClickSortDescending}>Descending</button>
          <button onClick={handleClickResetSort}>Reset</button> */}
        </div>
      </div>
    </div>
  );
};

export default SortComponent;

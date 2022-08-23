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
    /* https://www.youtube.com/watch?v=S-VeYcOCFZw&t=657s&ab_channel=WebDevSimplified */
    const handleDropdown = event => {
      const isDropdownButton = event.target.matches('[data-dropdown-button]');
      const background = document.querySelector('[data-background]');

      if (!isDropdownButton && event.target.closest('[data-dropdown]') !== null)
        return;

      let currentDropdown;
      if (isDropdownButton) {
        currentDropdown = event.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
        background.classList.toggle('active');
      }

      document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        background.classList.remove('active');
      });
    };

    document.addEventListener('click', handleDropdown);

    return () => {
      document.removeEventListener('click', handleDropdown);
    };
  }, []);

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
    <>
      <div className='layer-container' data-background />

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
              {HEADER_TITLES.map((title, index) => {
                return (
                  <div
                    key={index}
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
    </>
  );
};

export default SortComponent;

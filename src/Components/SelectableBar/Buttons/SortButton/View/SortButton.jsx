import { useEffect, useRef, useState } from 'react';

import SortButtonController from '../Controller/SortButtonController';

import '../Sort.css';

const SortButton = () => {
  const {
    filteredTitles,
    selectionSearchRef,
    handleSearchChange,
    handleKeyClick,
    indexOfTitle,
    handleMouseEnter,
    chosenSortSelection,
  } = SortButtonController();

  const sortClassName = chosenSortSelection ? 'sort-link-active' : 'sort-link';

  let sortRef = useRef();
  const [isSortDrpdwnOpen, setIsSortDrpdwnOpen] = useState(false);

  useEffect(() => {
    const sortDrpdwn = sortRef.current;
    console.log(sortRef.current);
    if (isSortDrpdwnOpen) {
      sortDrpdwn.classList.add('active');
    }
    if (!isSortDrpdwnOpen) sortDrpdwn.classList.remove('active');
  }, [isSortDrpdwnOpen]);

  useEffect(() => {
    console.log(isSortDrpdwnOpen);
  }, [isSortDrpdwnOpen]);

  return (
    <>
      <div className='main-background' data-background />

      <div className='sort-container'>
        <div ref={sortRef} className='sort-dropdown-menu'>
          <button
            className={sortClassName}
            onClick={() =>
              setIsSortDrpdwnOpen(isSortDrpdwnOpen => !isSortDrpdwnOpen)
            }
          >
            Sort
          </button>

          <div className='sort-dropdown-content'>
            <div className='dropdown-input-searchbar'>
              <input
                id='selectionSearchId'
                ref={selectionSearchRef}
                type='search'
                placeholder='Sort by...'
                onChange={handleSearchChange}
              />
            </div>

            <div className='dropdown-selection-container'>
              {filteredTitles.length > 0 ? (
                filteredTitles.map((title, index) => {
                  return (
                    <div
                      data-header-titles
                      id='selection-title'
                      key={index}
                      className='dropdown-selection'
                      style={{
                        background:
                          index === indexOfTitle && 'rgba(55, 53, 47, 0.08)',
                      }}
                      onClick={() => handleKeyClick(index)}
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      <p>{title}</p>
                    </div>
                  );
                })
              ) : (
                <p className='no-results-found'>No results found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SortButton;

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
    // isInitialRender,
    // setIsInitialRender,
  } = SortButtonController();

  let sortBtnRef = useRef();
  let sortTitleRef = useRef();
  let bckgrndRef = useRef();

  const [isSortDrpdwnOpen, setIsSortDrpdwnOpen] = useState(false);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const sortBtnHandler = e => {
      if (!sortBtnRef.current.contains(e.target)) {
        setIsSortDrpdwnOpen(false);
      }
    };
    document.addEventListener('mousedown', sortBtnHandler);
    return () => {
      document.removeEventListener('mousedown', sortBtnHandler);
    };
  }, [chosenSortSelection, isSortDrpdwnOpen]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  useEffect(() => {
    const sortDrpdwn = sortBtnRef.current;
    const bckgrnd = bckgrndRef.current;

    if (!isInitialRender && chosenSortSelection) return;

    if (isSortDrpdwnOpen) {
      sortDrpdwn.classList.add('active');
      bckgrnd.classList.add('active');
      return;
    }

    if (!isSortDrpdwnOpen || chosenSortSelection) {
      sortDrpdwn.classList.remove('active');
      bckgrnd.classList.remove('active');
    }

    if (chosenSortSelection) setIsInitialRender(false);
  }, [
    chosenSortSelection,
    isSortDrpdwnOpen,
    bckgrndRef,
    isInitialRender,
    setIsInitialRender,
  ]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  return (
    <>
      <div className='main-background' ref={bckgrndRef} />

      <div className='sort-container'>
        <div ref={sortBtnRef} className='sort-dropdown-menu'>
          <button
            data-sort-button
            className={chosenSortSelection ? 'sort-link-active' : 'sort-link'}
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

            <div
              className='dropdown-selection-container'
              ref={sortTitleRef}
              onClick={() => setIsSortDrpdwnOpen(false)}
            >
              {filteredTitles.length > 0 ? (
                filteredTitles.map((title, index) => {
                  return (
                    <div
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

import { useEffect, useRef, useState } from 'react';
import { HEADER_TITLES } from '../../../../../Data';
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
    setFilteredTitles,
    setChosenSortSelection,
    setSortValue,
  } = SortButtonController();

  let sortBtnRef = useRef();
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

  const handleSubmitEnter = e => {
    if (e.code === 'Enter') {
      e.preventDefault();
      setChosenSortSelection([filteredTitles[0]]);
      setSortValue('Ascending');
      setIsSortDrpdwnOpen(false);
    }
    console.log(chosenSortSelection);
  };

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  useEffect(() => {
    const sortDrpdwn = sortBtnRef.current;
    const bckgrnd = bckgrndRef.current;
    const searchBar = selectionSearchRef.current;

    if (!isInitialRender && chosenSortSelection.length > 0) return;

    if (isSortDrpdwnOpen) {
      searchBar.focus();
      sortDrpdwn.classList.add('active');
      bckgrnd.classList.add('active');
      return;
    }

    if (!isSortDrpdwnOpen || chosenSortSelection.length === 0) {
      setTimeout(() => {
        searchBar.value = '';
        setFilteredTitles([...HEADER_TITLES]);
      }, 160);

      sortDrpdwn.classList.remove('active');
      bckgrnd.classList.remove('active');
    }

    if (chosenSortSelection.length > 0) setIsInitialRender(false);
  }, [
    chosenSortSelection,
    isSortDrpdwnOpen,
    bckgrndRef,
    isInitialRender,
    setIsInitialRender,
    selectionSearchRef,
    setFilteredTitles,
  ]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  return (
    <>
      <div className='main-background' ref={bckgrndRef} />

      <div className='sort-container'>
        <div ref={sortBtnRef} className='sort-dropdown-menu'>
          <button
            data-sort-button
            className={
              chosenSortSelection.length > 0 ? 'sort-link-active' : 'sort-link'
            }
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
                onKeyDown={handleSubmitEnter}
                autoComplete='off'
              />
            </div>

            <div
              className='dropdown-selection-container'
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

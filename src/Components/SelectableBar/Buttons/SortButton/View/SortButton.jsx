import SortButtonController from '../Controller/SortButtonController';
import '../Sort.css';

const SortButton = () => {
  const {
    handleSearchChange,
    handleKeyClick,
    indexOfTitle,
    handleMouseEnter,
    chosenSortSelection,
    selectionSearchRef,
    filteredTitles,
  } = SortButtonController();

  return (
    <>
      <div className='main-background' data-background />

      <div className='sort-container'>
        <div className='sort-dropdown-menu' data-sort-dropdown>
          <button
            className='sort-link'
            data-sort-dropdown-btn
            style={{
              color: chosenSortSelection
                ? 'rgb(46, 170, 220)'
                : 'rgba(55, 53, 47, 0.65)',
            }}
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
                      id='selection-title'
                      key={index}
                      role='button'
                      className='dropdown-selection'
                      style={{
                        background:
                          index === indexOfTitle
                            ? 'rgba(55, 53, 47, 0.08)'
                            : '',
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
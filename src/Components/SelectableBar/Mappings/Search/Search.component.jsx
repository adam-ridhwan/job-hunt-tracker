import { useContext, useEffect, useRef, useState } from 'react';
import { selectableBarIcons } from '../../../../Icons/Icons';
import { SearchContext } from '../../../Contexts/SearchContext';
import './Search.styles.css';
const { searchIcon } = selectableBarIcons;

const SearchComponent = () => {
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             HOOK DECLARATIONS
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const { searchField, setSearchField } = useContext(SearchContext);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const inputRef = useRef();

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                        HANDLE FOCUS ON SEARCH BAR
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  useEffect(() => {
    if (isSearchBarVisible) {
      inputRef.current.focus();
    }
  }, [isSearchBarVisible]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             SET SEARCHSTRING
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                         HANDLE FOCUS AND DEFOCUS
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const handleFocus = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                 HANDLE CHECK FOR VISIBLE SEARCH AND TEXT
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  useEffect(() => {
    isSearchBarVisible && searchField
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [isSearchBarVisible, searchField, isDisabled]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                    HANDLE CLICK OUTSITE OF SEARCH BAR
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const handleDefocus = () => {
    if (inputRef.current.value) return;

    setTimeout(() => {
      setIsSearchBarVisible(false);
    }, 600);
  };

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                                  RENDER
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  return (
    <>
      <div className='search-container'>
        <button
          disabled={isDisabled}
          onClick={handleFocus}
          className='search-icon'
        >
          {searchIcon}
        </button>
      </div>

      {isSearchBarVisible ? (
        <div className='search-navigation'>
          <input
            ref={inputRef}
            id='searchBar'
            type='search'
            placeholder='Type to search...'
            aria-label='search'
            className='search-bar'
            onChange={handleSearchChange}
            onBlur={handleDefocus}
            required
          />
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default SearchComponent;

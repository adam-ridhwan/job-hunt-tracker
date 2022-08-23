import { selectableBarIcons } from '../../../../Icons/Icons';
import { SearchContext } from '../../../Contexts/SearchContext';

import './Search.styles.css';

import { useContext, useEffect, useRef, useState } from 'react';
const { searchIcon } = selectableBarIcons;

const SearchComponent = () => {
  const { searchField, setSearchField } = useContext(SearchContext);
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const inputRef = useRef();

  useEffect(() => {
    if (isSearchBarVisible) {
      inputRef.current.focus();
    }
  }, [isSearchBarVisible]);

  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const handleFocus = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  useEffect(() => {
    isSearchBarVisible && searchField
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [isSearchBarVisible, searchField, isDisabled]);

  const handleDefocus = () => {
    if (inputRef.current.value) return;

    setTimeout(() => {
      setIsSearchBarVisible(false);
    }, 700);
  };

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

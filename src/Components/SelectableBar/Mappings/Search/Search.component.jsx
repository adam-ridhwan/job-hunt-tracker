import { selectableBarIcons } from '../../../../Icons/Icons';
import { SearchContext } from '../../../Contexts/SearchContext';

import './Search.styles.css';

import { useContext, useEffect, useRef, useState } from 'react';
const { searchIcon, clearIcon } = selectableBarIcons;

const SearchComponent = () => {
  const { setSearchField } = useContext(SearchContext);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (showSearchBar) {
      inputRef.current.focus();
    }
  }, [showSearchBar]);

  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const focusBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const defocusInput = () => {
    if (inputRef.current.value) return;

    setTimeout(() => {
      setShowSearchBar(false);
    }, 600);
  };

  return (
    <>
      <div className='search-container'>
        <span className='search-icon' onClick={focusBar}>
          {searchIcon}
        </span>
      </div>

      {showSearchBar ? (
        <div className='search-navigation'>
          <input
            ref={inputRef}
            id='searchBar'
            type='search'
            placeholder='Type to search...'
            aria-label='search'
            className='search-bar'
            onChange={handleSearchChange}
            onBlur={defocusInput}
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

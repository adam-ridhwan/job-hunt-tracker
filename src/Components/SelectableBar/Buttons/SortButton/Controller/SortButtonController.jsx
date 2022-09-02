import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';
import { SortContext } from '../../../../../Contexts/SortContext';
import { HEADER_TITLES } from '../../../../../Data';

const SortButtonController = () => {
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             HOOK DECLARATIONS
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const { sortValue, setSortValue } = useContext(SearchContext);
  const { chosenSortSelection, setChosenSortSelection } =
    useContext(SortContext);
  const [searchSelection, setSearchSelection] = useState('');
  const [selection] = useState(HEADER_TITLES);
  const [filteredTitles, setFilteredTitles] = useState(selection);
  const selectionSearchRef = useRef();
  const [isInitialRender, setIsInitialRender] = useState(true);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                              HANDLE DROPDOWN
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  useEffect(() => {
    const handleSortMenuDropdown = e => {
      const isSortBtn = e.target.matches('[data-sort-dropdown-btn]');
      const mainSortBckgrnd = document.querySelector('[data-background]');
      const selectionDrpdwn = document.querySelector('[data-selection-drpdwn]');
      const activeSortDropdown = document.querySelector(
        '[data-sort-dropdown].active'
      );

      if (!isInitialRender && chosenSortSelection) {
        if (isSortBtn) {
          console.log('get');
          console.log(sortValue);
          selectionDrpdwn.classList.toggle('active');
          mainSortBckgrnd.classList.toggle('active');
        }
        return;
      }

      if (!isSortBtn && e.target.closest('[data-sort-dropdown]') !== null)
        return;

      let currentDropdown;
      if (isSortBtn) {
        currentDropdown = e.target.closest('[data-sort-dropdown]');
        selectionSearchRef.current.focus();
        currentDropdown.classList.toggle('active');
        mainSortBckgrnd.classList.toggle('active');
      }

      if (activeSortDropdown) {
        selectionSearchRef.current.value = '';
        setFilteredTitles(HEADER_TITLES);
        activeSortDropdown.classList.remove('active');
        mainSortBckgrnd.classList.remove('active');
      }

      if (chosenSortSelection) setIsInitialRender(false);
    };

    document.addEventListener('click', handleSortMenuDropdown);
    return () => {
      document.removeEventListener('click', handleSortMenuDropdown);
    };
  }, [chosenSortSelection, isInitialRender, sortValue]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                      HANDLE SEARCH SELECTION FILTER
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  useEffect(() => {
    const filteredSelections = selection.filter(title => {
      return title.toLocaleLowerCase().includes(searchSelection);
    });
    setFilteredTitles(filteredSelections);
  }, [searchSelection, selection]);

  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchSelection(searchFieldString);
  };

  const handleKeyClick = index => {
    setChosenSortSelection(filteredTitles[index]);

    const currentDropdown = document.querySelector('[data-sort-dropdown]');
    setSortValue('Ascending');
    currentDropdown.classList.remove('active');
  };

  const [indexOfTitle, setIndexOfTitle] = useState(0);

  const handleMouseEnter = index => {
    setIndexOfTitle(index);
  };

  useEffect(() => {
    setIndexOfTitle(0);
  }, [filteredTitles]);

  return {
    handleSearchChange,
    handleKeyClick,
    indexOfTitle,
    handleMouseEnter,
    chosenSortSelection,
    selectionSearchRef,
    filteredTitles,
  };
};

export default SortButtonController;

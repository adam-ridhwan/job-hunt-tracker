import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';
import { SortContext } from '../../../../../Contexts/SortContext';
import { HEADER_TITLES } from '../../../../../Data';

const SortController = () => {
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             HOOK DECLARATIONS
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const { setSortValue } = useContext(SearchContext);
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
    const handleSortMenuDropdown = event => {
      const isSortBtn = event.target.matches('[data-sort-dropdown-btn]');
      const mainSortBackground = document.querySelector('[data-background]');
      const isSelectionDrpdwnBtn = event.target.matches(
        '[data-selection-dropdown-btn]'
      );
      const activeSortDropdown = document.querySelector(
        '[data-sort-dropdown].active'
      );

      if (!chosenSortSelection) {
        if (!isSortBtn && event.target.closest('[data-sort-dropdown]') !== null)
          return;

        let currentDropdown;
        if (isSortBtn) {
          currentDropdown = event.target.closest('[data-sort-dropdown]');
          selectionSearchRef.current.focus();
          currentDropdown.classList.toggle('active');
          mainSortBackground.classList.toggle('active');
        }

        if (activeSortDropdown === currentDropdown) return;

        if (activeSortDropdown) {
          selectionSearchRef.current.value = '';
          setFilteredTitles(HEADER_TITLES);
          activeSortDropdown.classList.remove('active');
          mainSortBackground.classList.remove('active');
        }
      } else {
        const currentDropdown = document.querySelector(
          '.sort-selection-dropdown'
        );

        if (chosenSortSelection && isInitialRender) {
          setTimeout(() => {
            currentDropdown.classList.toggle('active');
          }, 5);
        }
        setIsInitialRender(false);
      }
    };

    document.addEventListener('click', handleSortMenuDropdown);
    return () => {
      document.removeEventListener('click', handleSortMenuDropdown);
    };
  });

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

export default SortController;

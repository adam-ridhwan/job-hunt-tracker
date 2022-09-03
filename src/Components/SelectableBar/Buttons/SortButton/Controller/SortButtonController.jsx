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
    const handleSortDrpdwn = e => {
      const isSortBtn = e.target.matches('[data-sort-btn]');

      const mainSortBckgrnd = document.querySelector('[data-background]');

      if (!isSortBtn && e.target.closest('[data-sort-drpdwn') !== null) return;

      let currentDrpdwn;
      if (isSortBtn) {
        currentDrpdwn = e.target.closest('[data-sort-drpdwn]');
        currentDrpdwn.classList.toggle('active');
        mainSortBckgrnd.classList.toggle('active');
      }
    };
    document.addEventListener('click', handleSortDrpdwn);
    return () => {
      document.removeEventListener('click', handleSortDrpdwn);
    };
  }, []);

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
    setSortValue('Ascending');
  };

  const [indexOfTitle, setIndexOfTitle] = useState(0);

  const handleMouseEnter = index => {
    setIndexOfTitle(index);
  };

  useEffect(() => {
    setIndexOfTitle(0);
  }, [filteredTitles]);

  return {
    sortValue,

    filteredTitles,
    chosenSortSelection,
    selectionSearchRef,
    handleSearchChange,
    handleKeyClick,
    indexOfTitle,
    handleMouseEnter,
  };
};

export default SortButtonController;

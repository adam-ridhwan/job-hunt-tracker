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

  // const handleSubmitEnter = e => {
  //   if (e.code === 'Enter') {
  //     setChosenSortSelection(filteredTitles[0]);
  //     setSortValue('Ascending');
  //   }
  // };

  return {
    sortValue,
    filteredTitles,
    chosenSortSelection,
    selectionSearchRef,
    handleSearchChange,
    handleKeyClick,
    setChosenSortSelection,
    indexOfTitle,
    handleMouseEnter,
    setFilteredTitles,
    setSortValue,
  };
};

export default SortButtonController;

import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';
import { SortContext } from '../../../../../Contexts/SortContext';

const SortSelectionController = () => {
  const { chosenSortSelection } = useContext(SortContext);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const { sortValue } = useContext(SearchContext);
  const { state, setState } = useState(false);

  useEffect(() => {
    const handleSelectionDropdown = e => {
      const isSortBtn = e.target.matches('[data-sort-dropdown-btn]');
      const isSelectionBtn = e.target.matches('[data-selection-btn]');
      const selectionDrpdwn = document.querySelector('[data-selection-drpdwn]');
      const activeSelectionDrpdwn = document.querySelector(
        '[data-selection-drpdwn].active'
      );

      const mainSortBackground = document.querySelector('[data-background]');

      if (chosenSortSelection && isInitialRender) {
        setTimeout(() => {
          selectionDrpdwn.classList.toggle('active');
        }, 5);
        setIsInitialRender(false);
        return;
      }

      if (
        !isSelectionBtn &&
        e.target.closest('[data-selection-drpdwn]') !== null
      )
        return;

      if (isSelectionBtn || isSortBtn) {
        selectionDrpdwn.classList.toggle('active');
        mainSortBackground.classList.toggle('active');
      }

      // if (activeSelectionDrpdwn) {
      //   activeSelectionDrpdwn.classList.remove('active');
      //   mainSortBackground.classList.remove('active');
      // }
    };

    document.addEventListener('click', handleSelectionDropdown);
    return () => {
      document.removeEventListener('click', handleSelectionDropdown);
    };
  }, [chosenSortSelection, isInitialRender]);

  return { chosenSortSelection, sortValue };
};

export default SortSelectionController;

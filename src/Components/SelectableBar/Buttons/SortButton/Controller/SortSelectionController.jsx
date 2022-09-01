import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';
import { SortContext } from '../../../../../Contexts/SortContext';

const SortSelectionController = () => {
  const { chosenSortSelection } = useContext(SortContext);
  const [isInitialRender, setIsInitialRender] = useState(true);
  const { sortValue } = useContext(SearchContext);

  useEffect(() => {
    const handleSelectionDropdown = e => {
      const isSelectionBtn = e.target.matches('[data-selection-btn]');
      const selectionDrpdwn = document.querySelector('[data-selection-drpdwn]');

      const mainSortBckgrnd = document.querySelector('[data-background]');

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
      ) {
        return;
      }

      if (isSelectionBtn) {
        selectionDrpdwn.classList.toggle('active');
        mainSortBckgrnd.classList.toggle('active');
        return;
      }
    };

    document.addEventListener('click', handleSelectionDropdown);
    return () => {
      document.removeEventListener('click', handleSelectionDropdown);
    };
  }, [chosenSortSelection, isInitialRender, sortValue]);

  return { chosenSortSelection, sortValue };
};

export default SortSelectionController;

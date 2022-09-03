import { useContext, useEffect } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';
import { SortContext } from '../../../../../Contexts/SortContext';

const SortContentController = () => {
  // const { sortValue } = useContext(SearchContext);
  // const { chosenSortSelection } = useContext(SortContext);
  // useEffect(() => {
  //   const handleContentDropdown = e => {
  //     const isContentBtn = e.target.matches('[data-sort-value-btn]');
  //     const contentDrpdwn = document.querySelector('[data-sort-value-drpdwn]');
  //     const activeContentDrpdwn = document.querySelector(
  //       '[data-sort-value-drpdwn].active'
  //     );
  //     const activeSelectionDrpdwn = document.querySelector(
  //       '[data-selection-drpdwn].active'
  //     );
  //     const mainSortBckgrnd = document.querySelector('[data-background]');
  //     const contentBckgrnd = document.querySelector('[data-content-bckgrnd]');
  //     if (!isContentBtn && e.target.closest('[data-sort-value-drpdwn]')) return;
  //     if (isContentBtn) {
  //       contentDrpdwn.classList.toggle('active');
  //       contentBckgrnd.classList.toggle('active');
  //       return;
  //     }
  //     if (activeContentDrpdwn) {
  //       contentDrpdwn.classList.remove('active');
  //       contentBckgrnd.classList.remove('active');
  //       return;
  //     }
  //     if (e.target.closest('[data-selection-drpdwn]') !== null) return;
  //     if (activeSelectionDrpdwn) {
  //       activeSelectionDrpdwn.classList.remove('active');
  //       mainSortBckgrnd.classList.remove('active');
  //     }
  //   };
  //   document.addEventListener('click', handleContentDropdown);
  //   return () => {
  //     document.removeEventListener('click', handleContentDropdown);
  //   };
  // }, [chosenSortSelection, sortValue]);
  // return { sortValue };
};

export default SortContentController;

import { useContext, useEffect } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';

const SortContentController = () => {
  const { sortValue } = useContext(SearchContext);

  useEffect(() => {
    const handleContentDropdown = e => {
      const isContentBtn = e.target.matches('[data-content-btn]');
      console.log('isContentBtn', isContentBtn);
      const contentDrpdwn = document.querySelector('[data-content-drpdwn]');
      const activeContentDrpdwn = document.querySelector(
        '[data-content-drpdwn].active'
      );
      const activeSelectionDrpdwn = document.querySelector(
        '[data-selection-drpdwn].active'
      );

      const contentBackground = document.querySelector(
        '[data-content-background]'
      );

      if (!isContentBtn && e.target.closest('[data-content-drpdwn]')) return;

      if (isContentBtn) {
        contentDrpdwn.classList.toggle('active');
        contentBackground.classList.toggle('active');
      }

      if (activeContentDrpdwn) {
        contentDrpdwn.classList.remove('active');
        contentBackground.classList.remove('active');
      }
    };

    document.addEventListener('click', handleContentDropdown);
    return () => {
      document.removeEventListener('click', handleContentDropdown);
    };
  }, [sortValue]);

  return { sortValue };
};

export default SortContentController;

import { useEffect } from 'react';

const SortOptionController = () => {
  // useEffect(() => {
  //   const handleOptionBtn = e => {
  //     const isOptionBtn = e.target.matches('[data-option-btn]');
  //     const activeOptionDrpdwn = document.querySelector(
  //       '[data-option-drpdwn].active'
  //     );
  //     const contentBckgrnd = document.querySelector('[data-content-bckgrnd]');

  //     // if (!isOptionBtn && e.target.matches('[data-option-drpdwn]') !== null)
  //     //   return;

  //     console.log('isOptionBtn', isOptionBtn);
  //     console.log('activeOptionDrpdwn', activeOptionDrpdwn);

  //     let currentDropdown;
  //     if (isOptionBtn) {
  //       currentDropdown = e.target.closest('[data-option-drpdwn]');
  //       currentDropdown.classList.toggle('active');
  //       contentBckgrnd.classList.toggle('active');
  //     }

  //     console.log('currentDropdown', currentDropdown);

  //     if (activeOptionDrpdwn) {
  //       activeOptionDrpdwn.remove('active');
  //     }
  //   };

  //   document.addEventListener('click', handleOptionBtn);
  //   return () => {
  //     document.removeEventListener('click', handleOptionBtn);
  //   };
  // }, []);

  return <></>;
};

export default SortOptionController;

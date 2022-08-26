import { useContext, useEffect, useState } from 'react';
import { SortContext } from '../../../../Contexts/SortContext';
import SortContent from '../Sort-content/Sort-content.component';
import './Sort-selection.styles.css';

const SortSelectionComponent = () => {
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             HOOK DECLARATIONS
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const { chosenSortSelection } = useContext(SortContext);
  const [isInitialRender, setIsInitialRender] = useState(true);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                   HANDLE DROPDOWN OF CHOSEN SORT TITLE
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  useEffect(() => {
    const handleSortSelectionButton = event => {
      // target 'sort' button and sort dropdown button
      const isDropdownButton = event.target.matches('[data-dropdown-button]');
      const isSortSelectionDropdownButton = event.target.matches(
        '[data-selection-dropdown-button]'
      );

      const activeSortSelectionDropdown = document.querySelector(
        '[data-selection-dropdown].active'
      );
      const sortContentDropdown = document.querySelector(
        '[data-sort-content-dropdown]'
      );

      const background = document.querySelector('[data-selection-background]');

      //  THIS BLOCK ONLY RUNS ONCE
      if (isInitialRender) {
        const currentDropdown = document.querySelector(
          '.sort-selection-dropdown'
        );

        if (chosenSortSelection) {
          setTimeout(() => {
            currentDropdown.classList.toggle('active');
            background.classList.toggle('active');
          }, 5);
        }
        setIsInitialRender(false);
      }

      // if targeted button is not clicked, return
      if (
        !isSortSelectionDropdownButton &&
        event.target.closest('[data-selection-dropdown]') !== null
      ) {
        if (
          !event.target.closest('[data-sort-content-dropdown]') &&
          sortContentDropdown.classList.contains('active')
        ) {
          sortContentDropdown.classList.remove('active');
        }
        return;
      }

      let currentDropdown; // stores current dropdown button

      // If the button with chosen title is clicked, toggle dropdown
      if (isSortSelectionDropdownButton) {
        currentDropdown = event.target.closest('[data-selection-dropdown]');
        currentDropdown.classList.toggle('active');
        background.classList.toggle('active');
      }

      //  If the 'sort' button is clicked, toggle selection dropdown
      if (isDropdownButton) {
        currentDropdown = document.querySelector('.sort-selection-dropdown');
        currentDropdown.classList.toggle('active');
        background.classList.toggle('active');
      }

      if (sortContentDropdown.classList.contains('active')) {
        sortContentDropdown.classList.remove('active');
        return;
      }

      //  This removes active class (hide dropdown)

      if (activeSortSelectionDropdown === currentDropdown) return;

      activeSortSelectionDropdown?.classList.remove('active');
      background.classList.remove('active');
    };
    document.addEventListener('click', handleSortSelectionButton);

    return () => {
      document.removeEventListener('click', handleSortSelectionButton);
    };
  }, [chosenSortSelection, isInitialRender]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                                  RENDER
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  return (
    <>
      <div
        className='sort-selection-layer-container'
        data-selection-background
      />

      <div className='sort-selection-container'>
        <div className='sort-selection-dropdown' data-selection-dropdown>
          <div className='sort-selection-link' data-selection-dropdown-button>
            {ASCENDING_ARROW_ICON}
            {chosenSortSelection}
            {CHEVRON_DOWN}
          </div>

          <div className='sort-selection-dropdown-menu'>
            <SortContent />
          </div>
        </div>
      </div>
    </>
  );
};

export default SortSelectionComponent;

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//                              DEFAULT ICONS SVG
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const ASCENDING_ARROW_ICON = (
  <svg
    viewBox='0 0 16 16'
    style={{
      width: '12px',
      height: '100%',
      marginRight: '4px',
      pointerEvents: 'none',
    }}
  >
    <path
      style={{ fill: 'rgb(46, 170, 220)' }}
      d='M7.99316 14.6133C8.58789 14.6133 8.98438 14.2031 8.98438 13.5879V6L8.92285 4.5166L10.2969 6.10254L11.835 7.63379C12.0195 7.81836 12.252 7.94141 12.5459 7.94141C13.0791 7.94141 13.4824 7.54492 13.4824 6.98438C13.4824 6.72461 13.3799 6.48535 13.1748 6.27344L8.72461 1.82324C8.54004 1.63184 8.2666 1.52246 7.99316 1.52246C7.72656 1.52246 7.44629 1.63184 7.26172 1.82324L2.81836 6.27344C2.61328 6.48535 2.51074 6.72461 2.51074 6.98438C2.51074 7.54492 2.91406 7.94141 3.44727 7.94141C3.74805 7.94141 3.98047 7.81836 4.1582 7.63379L5.69629 6.10254L7.07031 4.5166L7.00195 6V13.5879C7.00195 14.2031 7.40527 14.6133 7.99316 14.6133Z'
    ></path>
  </svg>
);

const CHEVRON_DOWN = (
  <svg
    viewBox='0 0 30 30'
    style={{
      width: '12px',
      height: '100%',
      marginLeft: '4px',
      pointerEvents: 'none',
    }}
  >
    <polygon
      style={{ fill: 'rgb(46, 170, 220)' }}
      points='15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 '
    ></polygon>
  </svg>
);

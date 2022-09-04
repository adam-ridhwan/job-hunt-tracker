import { useContext, useEffect, useRef, useState } from 'react';
import { SortContext } from '../../../../../Contexts/SortContext';
import SortButtonController from '../Controller/SortButtonController';
import SortContent from './SortContent';

const SortSelectionComponent = () => {
  const { isSortValueBtnOpen, isOptionValueBtnOpen } = useContext(SortContext);
  const { sortValue, chosenSortSelection } = SortButtonController();

  const selectionRef = useRef();
  const bckgrndRef = useRef();

  const [isSelectionDrpdwnOpen, setIsSelectionDrpdwnOpen] = useState(true);
  const [isInitialRender, setIsInitialRender] = useState(true);

  useEffect(() => {
    const selectionBtnHandler = e => {
      if (isSortValueBtnOpen || isOptionValueBtnOpen) return;

      if (!selectionRef.current.contains(e.target)) {
        setIsSelectionDrpdwnOpen(false);
      }
    };
    document.addEventListener('mousedown', selectionBtnHandler);
    return () => {
      document.removeEventListener('mousedown', selectionBtnHandler);
    };
  }, [
    chosenSortSelection,
    isSelectionDrpdwnOpen,
    selectionRef,
    isSortValueBtnOpen,
    isOptionValueBtnOpen,
  ]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  useEffect(() => {
    const selectionDrpdwn = selectionRef.current;
    const bckgrnd = bckgrndRef.current;

    const sortBtnHandler = e => {
      const isSortBtn = e.target.matches('[data-sort-button]');

      if (!isSortBtn) return;

      if (isSortBtn) {
        selectionDrpdwn.classList.add('active');
        bckgrnd.classList.add('active');
        setIsSelectionDrpdwnOpen(true);
      }
    };
    document.addEventListener('mousedown', sortBtnHandler);
    return () => {
      document.removeEventListener('mousedown', sortBtnHandler);
    };
  });

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  useEffect(() => {
    const selectionDrpdwn = selectionRef.current;
    const bckgrnd = bckgrndRef.current;

    if (isInitialRender) {
      setTimeout(() => {
        selectionDrpdwn.classList.add('active');
        bckgrnd.classList.add('active');
      }, 100);
      setIsInitialRender(false);
      return;
    }

    if (isSelectionDrpdwnOpen) {
      selectionDrpdwn.classList.add('active');
      bckgrnd.classList.add('active');
      return;
    }

    if (!isSelectionDrpdwnOpen) {
      selectionDrpdwn.classList.remove('active');
      bckgrnd.classList.remove('active');
      return;
    }
  }, [chosenSortSelection, isSelectionDrpdwnOpen, isInitialRender]);

  return (
    <>
      <div className='main-background' ref={bckgrndRef} data-background />

      <div className='sort-selection-container'>
        <div
          className='sort-selection-dropdown'
          ref={selectionRef}
          data-selection-drpdwn
        >
          <div
            className='sort-selection-link'
            onClick={() =>
              setIsSelectionDrpdwnOpen(
                isSelectionDrpdwnOpen => !isSelectionDrpdwnOpen
              )
            }
          >
            {sortValue === 'Ascending'
              ? ASCENDING_ARROW_ICON
              : DESCENDING_ARROW_ICON}
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

const DESCENDING_ARROW_ICON = (
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
      d='M7.99316 1.52246C7.40527 1.52246 7.00195 1.93262 7.00195 2.54785V10.1357L7.07031 11.6191L5.69629 10.0332L4.1582 8.50195C3.98047 8.31738 3.74805 8.19434 3.44727 8.19434C2.91406 8.19434 2.51074 8.59082 2.51074 9.15137C2.51074 9.41113 2.61328 9.65039 2.81836 9.8623L7.26172 14.3125C7.44629 14.5039 7.72656 14.6133 7.99316 14.6133C8.2666 14.6133 8.54004 14.5039 8.72461 14.3125L13.1748 9.8623C13.3799 9.65039 13.4824 9.41113 13.4824 9.15137C13.4824 8.59082 13.0791 8.19434 12.5459 8.19434C12.252 8.19434 12.0195 8.31738 11.835 8.50195L10.2969 10.0332L8.92285 11.6191L8.98438 10.1357V2.54785C8.98438 1.93262 8.58789 1.52246 7.99316 1.52246Z'
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

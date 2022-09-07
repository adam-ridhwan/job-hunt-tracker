import { createRef, useContext, useEffect, useRef, useState } from 'react';

import { SortContext } from '../../../../../Contexts/SortContext';
import { HEADER_TITLES } from '../../../../../Data';
import SortButtonController from '../Controller/SortButtonController';
import SortValueController from '../Controller/SortValueController';

const SortContent = () => {
  const {
    isSortValueBtnOpen,
    setIsSortValueBtnOpen,
    isOptionValueBtnOpen,
    setIsOptionValueBtnOpen,
    chosenSortSelection,
    setChosenSortSelection,
  } = useContext(SortContext);

  const { sortValue } = SortButtonController();

  const {
    handleSortValueDrpdwnEnter,
    handleSortValueDrpdwnLeave,
    hoveredOnAscending,
    hoveredOnDescending,
    handleSortValueEnter,
    handleSortValueLeave,
    handleSortValueClick,
    selectionRef,
  } = SortValueController();

  const sortValueBtnRef = useRef();
  const sortBckgrndRef = useRef();
  const chosenSearchSelectionRef = useRef();
  let optionValueBtnRef = useRef([]);

  // LINK: https://dev.to/nicm42/react-refs-in-a-loop-1jk4
  // optionValueBtnRef.current = chosenSortSelection.map(
  //   (_, index) => optionValueBtnRef.current[index] ?? createRef()
  // );

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                     ASCENDING AND DESCENDING BUTTONS
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  const AscendingBtn = () => {
    return (
      <div
        onMouseEnter={() => handleSortValueEnter('Ascending')}
        onMouseLeave={() => handleSortValueLeave('Ascending')}
        onClick={() => handleSortValueClick('Ascending')}
      >
        <span
          style={{
            background: hoveredOnAscending && 'rgba(55, 53, 47, 0.08)',
          }}
        >
          Ascending
        </span>
      </div>
    );
  };

  const DescendingBtn = () => {
    return (
      <div
        onMouseEnter={() => handleSortValueEnter('Descending')}
        onMouseLeave={() => handleSortValueLeave('Descending')}
        onClick={() => handleSortValueClick('Descending')}
      >
        <span
          style={{
            background: hoveredOnDescending && 'rgba(55, 53, 47, 0.08)',
          }}
        >
          Descending
        </span>
      </div>
    );
  };

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                            HANDLE CHANGE TITLE
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  const handleChangeTitle = (indexOfDiv, clickedIndex) => {
    setChosenSortSelection(
      chosenSortSelection.map((e, i) => {
        return i === clickedIndex ? HEADER_TITLES[indexOfDiv] : e;
      })
    );

    console.log(chosenSortSelection);

    setIsOptionValueBtnOpen(false);
  };

  useEffect(() => {
    optionValueBtnRef.current.forEach((_, i) => {
      console.log(optionValueBtnRef.current[i]);
    });
  }, [chosenSortSelection]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                            OPTION VALUE BUTTON
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  // close background && option dropdwn
  useEffect(() => {
    const bckgrnd = sortBckgrndRef.current;

    if (!isOptionValueBtnOpen) {
      chosenSortSelection.forEach((_, index) => {
        optionValueBtnRef.current[index].classList.remove('active');
      });
      bckgrnd.classList.remove('active');
    }
  }, [chosenSortSelection, isOptionValueBtnOpen]);

  // open background && option dropdown
  const handleOpenDrpdwn = clickedIndex => {
    setIsOptionValueBtnOpen(true);
    const bckgrnd = sortBckgrndRef.current;
    bckgrnd.classList.add('active');

    optionValueBtnRef.current[clickedIndex].classList.add('active');
  };

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             SORT VALUE BUTTON
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  useEffect(() => {
    const sortBtnHandler = e => {
      const drpdwnBckgrnd = sortBckgrndRef.current;
      const mainBckgrnd = document.querySelector('[data-background]');

      const isMainBckgrndClicked = mainBckgrnd.contains(e.target);
      const isDrpdwnBckgrndClicked = drpdwnBckgrnd.contains(e.target);

      if (isMainBckgrndClicked || isDrpdwnBckgrndClicked) {
        setIsOptionValueBtnOpen(false);
      }

      if (!sortValueBtnRef.current.contains(e.target)) {
        setIsSortValueBtnOpen(false);
      }
    };
    document.addEventListener('mousedown', sortBtnHandler);
    return () => {
      document.removeEventListener('mousedown', sortBtnHandler);
    };
  }, [
    chosenSortSelection,
    isSortValueBtnOpen,
    setIsSortValueBtnOpen,
    isOptionValueBtnOpen,
    setIsOptionValueBtnOpen,
  ]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  useEffect(() => {
    const sortValueDrpdwn = sortValueBtnRef.current;
    const bckgrnd = sortBckgrndRef.current;

    if (isSortValueBtnOpen) {
      sortValueDrpdwn.classList.add('active');
      bckgrnd.classList.add('active');
    }

    if (!isSortValueBtnOpen) {
      sortValueDrpdwn.classList.remove('active');
      bckgrnd.classList.remove('active');
    }
  }, [chosenSortSelection, isSortValueBtnOpen, selectionRef]);

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                             HANDLE SEARCH BAR
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const [selection] = useState(HEADER_TITLES);
  const [filteredTitles, setFilteredTitles] = useState(selection);
  const [searchSelection, setSearchSelection] = useState('');

  useEffect(() => {
    const filteredSelections = selection.filter(title => {
      return title.toLocaleLowerCase().includes(searchSelection);
    });
    setFilteredTitles(filteredSelections);
  }, [chosenSortSelection, searchSelection, selection]);

  const handleSearchChange = event => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchSelection(searchFieldString);
  };

  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  //                        HANDLE HOVER ON PROPERTIES
  // ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  const [indexOfTitle, setIndexOfTitle] = useState();

  const handleHoverTitle = indexOfDiv => {
    setIndexOfTitle(indexOfDiv);
  };

  //* RETURN ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

  return (
    <>
      <div className='dropdown-background' ref={sortBckgrndRef} />

      {/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */}

      {chosenSortSelection.map((chosenTitle, clickedIndex) => {
        return (
          <div key={clickedIndex} className='sort-content-container'>
            <div className='sort-content-icons'>{DRAG_HANDLE_ICON}</div>

            {/* dropdown button ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */}
            <div
              className='option-drpdwn'
              ref={ref => (optionValueBtnRef.current[clickedIndex] = ref)}
            >
              <div
                className='option-link'
                onClick={() => handleOpenDrpdwn(clickedIndex)}
              >
                {chosenTitle}
                {CHEVRON_DOWN}
              </div>

              {/* dropdwn menu ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */}
              <div className='option-menu'>
                <div className='drpdwn-options-searchbar'>
                  <input
                    id='selectionSearchId'
                    ref={chosenSearchSelectionRef}
                    onChange={handleSearchChange}
                    type='search'
                    placeholder='Search for a property...'
                    autoComplete='off'
                  />
                </div>

                {filteredTitles.map((title, indexOfDiv) => {
                  return (
                    <div
                      key={indexOfDiv}
                      className='drpdwn-options'
                      onMouseEnter={() => handleHoverTitle(indexOfDiv)}
                      onClick={() =>
                        handleChangeTitle(indexOfDiv, clickedIndex)
                      }
                      style={{
                        background:
                          indexOfDiv === indexOfTitle &&
                          'rgba(55, 53, 47, 0.08)',
                      }}
                    >
                      <p>{title}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className='dropdown' ref={sortValueBtnRef}>
              <div
                className='link'
                onClick={() => setIsSortValueBtnOpen(prev => !prev)}
              >
                {sortValue}
                {CHEVRON_DOWN}
              </div>

              <div
                className='dropdown-menu'
                onMouseEnter={handleSortValueDrpdwnEnter}
                onMouseLeave={handleSortValueDrpdwnLeave}
              >
                <AscendingBtn />
                <DescendingBtn />
              </div>
            </div>

            <div
              className='sort-content-icons'
              style={{ marginLeft: 'auto', marginRight: '20px' }}
            >
              {DELETE_ICON}
            </div>
          </div>
        );
      })}

      {/* ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■ */}

      <div className='add-delete-container'>
        <div>
          <div className='sort-content-icons'>{ADD_ICON}</div>
          <div className='sort-content-title'>Add sort</div>
        </div>

        <div>
          <div className='sort-content-icons'>{TRASH_ICON}</div>
          <div className='sort-content-title'>Delete sort</div>
        </div>
      </div>
    </>
  );
};

export default SortContent;

// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//                              DEFAULT SVG ICONS
// ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
const DRAG_HANDLE_ICON = (
  <svg
    viewBox='0 0 12 12'
    style={{
      width: '24px',
      height: '16px',
      pointerEvents: 'none',
    }}
  >
    <path
      style={{ fill: 'rgba(55, 53, 47, 0.45)' }}
      d='M3,2 C2.44771525,2 2,1.55228475 2,1 C2,0.44771525 2.44771525,0 3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M3,6 C2.44771525,6 2,5.55228475 2,5 C2,4.44771525 2.44771525,4 3,4 C3.55228475,4 4,4.44771525 4,5 C4,5.55228475 3.55228475,6 3,6 Z M3,10 C2.44771525,10 2,9.55228475 2,9 C2,8.44771525 2.44771525,8 3,8 C3.55228475,8 4,8.44771525 4,9 C4,9.55228475 3.55228475,10 3,10 Z M7,2 C6.44771525,2 6,1.55228475 6,1 C6,0.44771525 6.44771525,0 7,0 C7.55228475,0 8,0.44771525 8,1 C8,1.55228475 7.55228475,2 7,2 Z M7,6 C6.44771525,6 6,5.55228475 6,5 C6,4.44771525 6.44771525,4 7,4 C7.55228475,4 8,4.44771525 8,5 C8,5.55228475 7.55228475,6 7,6 Z M7,10 C6.44771525,10 6,9.55228475 6,9 C6,8.44771525 6.44771525,8 7,8 C7.55228475,8 8,8.44771525 8,9 C8,9.55228475 7.55228475,10 7,10 Z'
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
      style={{ fill: 'rgba(55, 53, 47, 0.45)' }}
      points='15,17.4 4.8,7 2,9.8 15,23 28,9.8 25.2,7 '
    ></polygon>
  </svg>
);

const DELETE_ICON = (
  <svg
    viewBox='0 0 14 14'
    style={{
      width: '24px',
      height: '16px',
    }}
  >
    <path
      style={{ fill: 'rgba(55, 53, 47, 0.45)' }}
      d='M12 3.27273L10.7273 2L7 5.72727L3.27273 2L2 3.27273L5.72727 7L2 10.7273L3.27273 12L7 8.27273L10.7273 12L12 10.7273L8.27273 7L12 3.27273Z'
    ></path>
  </svg>
);

const ADD_ICON = (
  <svg
    viewBox='0 0 16 16'
    style={{
      width: '24px',
      height: '16px',
    }}
  >
    <path
      style={{ fill: 'rgba(55, 53, 47, 0.45)' }}
      d='M7.977 14.963c.407 0 .747-.324.747-.723V8.72h5.362c.399 0 .74-.34.74-.747a.746.746 0 00-.74-.738H8.724V1.706c0-.398-.34-.722-.747-.722a.732.732 0 00-.739.722v5.529h-5.37a.746.746 0 00-.74.738c0 .407.341.747.74.747h5.37v5.52c0 .399.332.723.739.723z'
    ></path>
  </svg>
);

const TRASH_ICON = (
  <svg
    viewBox='0 0 16 16'
    style={{
      width: '24px',
      height: '16px',
    }}
  >
    <path
      style={{ fill: 'rgba(55, 53, 47, 0.45)' }}
      d='M4.8623 15.4287H11.1445C12.1904 15.4287 12.8672 14.793 12.915 13.7402L13.3799 3.88965H14.1318C14.4736 3.88965 14.7402 3.62988 14.7402 3.28809C14.7402 2.95312 14.4736 2.69336 14.1318 2.69336H11.0898V1.66797C11.0898 0.62207 10.4268 0 9.29199 0H6.69434C5.56641 0 4.89648 0.62207 4.89648 1.66797V2.69336H1.86133C1.5332 2.69336 1.25977 2.95312 1.25977 3.28809C1.25977 3.62988 1.5332 3.88965 1.86133 3.88965H2.62012L3.08496 13.7471C3.13281 14.7998 3.80273 15.4287 4.8623 15.4287ZM6.1543 1.72949C6.1543 1.37402 6.40039 1.14844 6.7832 1.14844H9.20312C9.58594 1.14844 9.83203 1.37402 9.83203 1.72949V2.69336H6.1543V1.72949ZM4.99219 14.2188C4.61621 14.2188 4.34277 13.9453 4.32227 13.542L3.86426 3.88965H12.1152L11.6709 13.542C11.6572 13.9453 11.3838 14.2188 10.9941 14.2188H4.99219ZM5.9834 13.1182C6.27051 13.1182 6.45508 12.9336 6.44824 12.667L6.24316 5.50293C6.23633 5.22949 6.04492 5.05176 5.77148 5.05176C5.48438 5.05176 5.2998 5.23633 5.30664 5.50293L5.51172 12.667C5.51855 12.9404 5.70996 13.1182 5.9834 13.1182ZM8 13.1182C8.28711 13.1182 8.47852 12.9336 8.47852 12.667V5.50293C8.47852 5.23633 8.28711 5.05176 8 5.05176C7.71289 5.05176 7.52148 5.23633 7.52148 5.50293V12.667C7.52148 12.9336 7.71289 13.1182 8 13.1182ZM10.0166 13.1182C10.29 13.1182 10.4746 12.9404 10.4814 12.667L10.6934 5.50293C10.7002 5.23633 10.5088 5.05176 10.2285 5.05176C9.95508 5.05176 9.76367 5.22949 9.75684 5.50293L9.54492 12.667C9.53809 12.9336 9.72949 13.1182 10.0166 13.1182Z'
    ></path>
  </svg>
);

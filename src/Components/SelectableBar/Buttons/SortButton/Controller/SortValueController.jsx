import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';

const SortValueController = () => {
  // const { sortValue, setSortValue } = useContext(SearchContext);
  // const [hoveredOnDrpdwn, setHoverOnDrpdwn] = useState(false);
  // const [hoveredOnAscending, setHoveredOnAscending] = useState(false);
  // const [hoveredOnDescending, setHoveredOnDescending] = useState(false);
  // const previousRef = useRef(sortValue);
  // useEffect(() => {
  //   const handleClickOnSortBtn = e => {
  //     const isSortValueBtn = e.target.matches('[data-sort-value-btn]');
  //     if (isSortValueBtn) previousRef.current = sortValue;
  //     switch (previousRef.current) {
  //       case 'Ascending':
  //         setHoveredOnAscending(true);
  //         setHoveredOnDescending(false);
  //         break;
  //       case 'Descending':
  //         setHoveredOnDescending(true);
  //         setHoveredOnAscending(false);
  //         break;
  //       default:
  //         return;
  //     }
  //   };
  //   switch (hoveredOnDrpdwn || previousRef.current) {
  //     case 'Ascending':
  //       setHoveredOnAscending(true);
  //       setHoveredOnDescending(false);
  //       break;
  //     case 'Descending':
  //       setHoveredOnDescending(true);
  //       setHoveredOnAscending(false);
  //       break;
  //     default:
  //       return;
  //   }
  //   document.addEventListener('click', handleClickOnSortBtn);
  //   return () => {
  //     document.removeEventListener('click', handleClickOnSortBtn);
  //   };
  // }, [sortValue, hoveredOnDrpdwn, previousRef]);
  // const handleSortValueDrpdwnEnter = () => {
  //   setHoverOnDrpdwn(true);
  // };
  // const handleSortValueDrpdwnLeave = () => {
  //   setHoverOnDrpdwn(false);
  // };
  // const handleSortValueEnter = sortValueProp => {
  //   switch (sortValueProp) {
  //     case 'Ascending':
  //       setHoveredOnAscending(true);
  //       setHoveredOnDescending(false);
  //       break;
  //     case 'Descending':
  //       setHoveredOnDescending(true);
  //       setHoveredOnAscending(false);
  //       break;
  //     default:
  //       console.log('get yeeted');
  //   }
  // };
  // const handleSortValueLeave = sortValueProp => {
  //   switch (sortValueProp) {
  //     case 'Ascending':
  //       setHoveredOnAscending(false);
  //       break;
  //     case 'Descending':
  //       setHoveredOnDescending(false);
  //       break;
  //     default:
  //       console.log('get yeeted');
  //   }
  //   previousRef.current = sortValueProp;
  // };
  // const handleSortValueClick = sortValueProp => {
  //   if (sortValue === sortValueProp) return;
  //   setSortValue(sortValueProp);
  // };
  // return {
  //   handleSortValueDrpdwnEnter,
  //   handleSortValueDrpdwnLeave,
  //   hoveredOnAscending,
  //   hoveredOnDescending,
  //   handleSortValueEnter,
  //   handleSortValueLeave,
  //   handleSortValueClick,
  // };
};

export default SortValueController;

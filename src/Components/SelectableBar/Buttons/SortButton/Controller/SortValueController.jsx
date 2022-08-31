import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';

const SortValueController = () => {
  const { sortValue } = useContext(SearchContext);
  const [hoveredOnDrpdwn, setHoverOnDrpdwn] = useState(false);
  const [hoveredOnAscending, setHoveredOnAscending] = useState(false);
  const [hoveredOnDescending, setHoveredOnDescending] = useState(false);
  const previousRef = useRef(sortValue);

  useEffect(() => {
    const handleSortValueDropdown = event => {
      const sortValueDrpdwn = document.querySelector('.dropdown-menu');
      const activeSelectionDrpdwn = document.querySelector(
        '[data-selection-drpdwn].active'
      );
    };

    document.addEventListener('click', handleSortValueDropdown);
    return () => {
      document.removeEventListener('click', handleSortValueDropdown);
    };
  }, [sortValue, hoveredOnDrpdwn, previousRef]);

  useEffect(() => {
    switch (hoveredOnDrpdwn || previousRef.current) {
      case 'Ascending':
        setHoveredOnAscending(true);
        setHoveredOnDescending(false);
        break;
      case 'Descending':
        setHoveredOnDescending(true);
        setHoveredOnAscending(false);
        break;
      default:
        return;
    }
    console.log(sortValue);
    if (!hoveredOnDrpdwn) previousRef.current = sortValue;
  }, [sortValue, hoveredOnDrpdwn, previousRef]);

  const handleSortValueDrpdwnEnter = () => {
    setHoverOnDrpdwn(true);
  };

  const handleSortValueDrpdwnLeave = () => {
    setHoverOnDrpdwn(false);
  };

  const handleSortValueEnter = sortValueProp => {
    switch (sortValueProp) {
      case 'Ascending':
        setHoveredOnAscending(true);
        setHoveredOnDescending(false);
        break;
      case 'Descending':
        setHoveredOnDescending(true);
        setHoveredOnAscending(false);
        break;
      default:
        console.log('get yeeted');
    }
  };

  const handleSortValueLeave = sortValueProp => {
    switch (sortValueProp) {
      case 'Ascending':
        setHoveredOnAscending(false);
        break;
      case 'Descending':
        setHoveredOnDescending(false);
        break;
      default:
        console.log('get yeeted');
    }

    previousRef.current = sortValueProp;
  };

  useEffect(() => {
    console.log(previousRef);
  }, [hoveredOnDrpdwn]);

  return {
    handleSortValueDrpdwnEnter,
    handleSortValueDrpdwnLeave,
    hoveredOnAscending,
    hoveredOnDescending,
    handleSortValueEnter,
    handleSortValueLeave,
  };
};

export default SortValueController;

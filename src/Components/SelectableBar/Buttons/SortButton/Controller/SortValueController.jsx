import { useContext, useEffect, useRef, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';

const SortValueController = () => {
  const { sortValue } = useContext(SearchContext);
  const [hoveredOnDrpdwn, setHoverOnDrpdwn] = useState(false);
  const [hoveredOnAscending, setHoveredOnAscending] = useState(false);
  const [hoveredOnDescending, setHoveredOnDescending] = useState(false);
  const previousRef = useRef('Descending');

  useEffect(() => {
    const handleSortValueDropdown = event => {
      const sortValueDrpdwn = document.querySelector('.dropdown-menu');
    };

    document.addEventListener('click', handleSortValueDropdown);
    return () => {
      document.removeEventListener('click', handleSortValueDropdown);
    };
  });

  useEffect(() => {
    if (!hoveredOnDrpdwn) {
      switch (previousRef.current) {
        case 'Ascending':
          setHoveredOnAscending(true);
          break;
        case 'Descending':
          setHoveredOnDescending(true);
          break;
        default:
          return;
      }
    }
  }, [sortValue, hoveredOnDrpdwn]);

  const handleSortValueDrpdwnEnter = () => {
    setHoverOnDrpdwn(true);
  };

  const handleSortValueDrpdwnLeave = () => {
    setHoverOnDrpdwn(false);
  };

  const handleSortValueEnter = sortValue => {
    switch (sortValue) {
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

  const handleSortValueLeave = sortValue => {
    previousRef.current = sortValue;
    switch (sortValue) {
      case 'Ascending':
        setHoveredOnAscending(false);
        break;
      case 'Descending':
        setHoveredOnDescending(false);
        break;
      default:
        console.log('get yeeted');
    }
  };

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

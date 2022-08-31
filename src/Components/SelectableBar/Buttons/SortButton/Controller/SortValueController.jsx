import { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../../../../../Contexts/SearchContext';

const SortValueController = () => {
  const { sortValue } = useContext(SearchContext);
  const [hoveredOnAscending, setHoveredOnAscending] = useState(false);
  const [hoveredOnDescending, setHoveredOnDescending] = useState(false);

  useEffect(() => {
    const handleSortValueDropdown = event => {
      const sortValueDrpdwn = document.querySelector('.dropdown-menu');
      console.log(sortValueDrpdwn);
    };

    document.addEventListener('click', handleSortValueDropdown);
    return () => {
      document.removeEventListener('click', handleSortValueDropdown);
    };
  });

  // useEffect(() => {
  //   if (sortValue === 'Ascending') {
  //     setHoveredOnAscending(true);
  //     return;
  //   }
  //   if (sortValue === 'Descending') {
  //     setHoveredOnDescending(true);
  //     return;
  //   }
  // }, [sortValue]);

  const handleAscendingEnter = () => {
    setHoveredOnAscending(true);
  };

  const handleAscendingLeave = () => {
    setHoveredOnAscending(false);
  };

  const handleDescendingEnter = () => {
    setHoveredOnDescending(true);
  };

  const handleDescendingLeave = () => {
    setHoveredOnDescending(false);
  };

  return {
    hoveredOnAscending,
    hoveredOnDescending,
    handleAscendingEnter,
    handleAscendingLeave,
    handleDescendingEnter,
    handleDescendingLeave,
  };
};

export default SortValueController;

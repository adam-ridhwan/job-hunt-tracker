import { useEffect } from 'react';

const SortOptionController = () => {
  useEffect(() => {
    const handleOptionBtn = e => {
      const isOptionBtn = e.target.matches('[data-option-btn]');
      console.log(isOptionBtn);
    };

    document.addEventListener('click', handleOptionBtn);
    return () => {
      document.removeEventListener('click', handleOptionBtn);
    };
  }, []);

  return <></>;
};

export default SortOptionController;

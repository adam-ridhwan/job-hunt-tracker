import { createContext, useState } from 'react';

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [chosenSortSelection, setChosenSortSelection] = useState(null);

  return (
    <SortContext.Provider
      value={{ chosenSortSelection, setChosenSortSelection }}
    >
      {children}
    </SortContext.Provider>
  );
};

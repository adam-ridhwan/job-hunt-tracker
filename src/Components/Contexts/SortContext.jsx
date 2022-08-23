import { createContext, useState } from 'react';

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [chosenFilterSelection, setChosenFilterSelection] = useState(null);

  return (
    <SortContext.Provider
      value={{ chosenFilterSelection, setChosenFilterSelection }}
    >
      {children}
    </SortContext.Provider>
  );
};

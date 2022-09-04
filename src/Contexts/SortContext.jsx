import { createContext, useState } from 'react';

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [chosenSortSelection, setChosenSortSelection] = useState(null);
  const [isSortValueBtnOpen, setIsSortValueBtnOpen] = useState(false);

  return (
    <SortContext.Provider
      value={{
        chosenSortSelection,
        setChosenSortSelection,
        isSortValueBtnOpen,
        setIsSortValueBtnOpen,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

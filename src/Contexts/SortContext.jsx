import { createContext, useState } from 'react';

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  const [chosenSortSelection, setChosenSortSelection] = useState(null);
  const [isSortValueBtnOpen, setIsSortValueBtnOpen] = useState(false);
  const [isOptionValueBtnOpen, setIsOptionValueBtnOpen] = useState(false);

  return (
    <SortContext.Provider
      value={{
        chosenSortSelection,
        setChosenSortSelection,
        isSortValueBtnOpen,
        setIsSortValueBtnOpen,
        isOptionValueBtnOpen,
        setIsOptionValueBtnOpen,
      }}
    >
      {children}
    </SortContext.Provider>
  );
};

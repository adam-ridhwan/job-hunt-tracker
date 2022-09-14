import { createContext, useState } from 'react';

export const SortContext = createContext();

export const SortProvider = ({ children }) => {
  // this will contain the chosenSortSelection and its sort value
  const [chosenSortSelection, setChosenSortSelection] = useState([]);
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

import { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children, jobInput }) => {
  const [searchField, setSearchField] = useState('');

  const [entries, setEntries] = useState(jobInput);
  const [sortedEntries, setSortedEntries] = useState(entries);
  const [filteredEntries, setFilteredEntries] = useState(sortedEntries);

  // need to update this one
  const [sortValue, setSortValue] = useState();

  return (
    <SearchContext.Provider
      value={{
        jobInput,
        searchField,
        setSearchField,
        entries,
        setEntries,
        sortedEntries,
        setSortedEntries,
        filteredEntries,
        setFilteredEntries,
        sortValue,
        setSortValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

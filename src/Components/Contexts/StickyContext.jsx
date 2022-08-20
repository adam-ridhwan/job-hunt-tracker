import { createContext } from 'react';
import { useInView } from 'react-intersection-observer';

export const StickyContext = createContext();

export const StickProvider = ({ children }) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <StickyContext.Provider
      value={{
        myRef,
        myElementIsVisible,
      }}
    >
      {children}
    </StickyContext.Provider>
  );
};

import { createContext, useContext, useState } from "react";

const ShowSearchPageContext = createContext(null);

export function ShowSearchPageProvider({ children }) {
  const [showSearchPage, setShowSearchPage] = useState(false);

  function toggleShowSearchPage() {
    setShowSearchPage((ssp) => !ssp);
  }

  const value = { showSearchPage, toggleShowSearchPage };

  return (
    <ShowSearchPageContext.Provider value={value}>
      {children}
    </ShowSearchPageContext.Provider>
  );
}

export function useShowSearchPage() {
  const ctx = useContext(ShowSearchPageContext);
  if (!ctx) {
    throw new Error(
      "useShowSearchPage must be used inside <ShowSearchPageProvider>.",
    );
  }
  return ctx;
}

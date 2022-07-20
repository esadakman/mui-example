import { createContext } from "react";

export const PaginateContext = createContext();

const PagiContextProvider = ({ children }) => {
  const usersPerPage = 10;

  return (
    <PaginateContext.Provider value={{ usersPerPage }}>
      {children}
    </PaginateContext.Provider>
  );
};

export default PagiContextProvider;

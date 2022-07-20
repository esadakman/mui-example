import { createContext } from "react";

export const PaginateContext = createContext();

const PagiContextProvider = ({ children }) => {
  // ! useContext konusunu pekiştirmek adına userPerPage variable'ını context olarak ekledim
  const usersPerPage = 10;

  return (
    <PaginateContext.Provider value={{ usersPerPage }}>
      {children}
    </PaginateContext.Provider>
  );
};

export default PagiContextProvider;

import React, { createContext, useState } from 'react';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [page, setPage] = useState('dashboard');
 
  return (
    <Provider
      value={{
        page,
        setPage: (pg) => setPage(pg),
      }}
    >
      {children}
    </Provider>
  );
};

export { AppContext, AppProvider };

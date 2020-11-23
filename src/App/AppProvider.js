import React, { createContext, useState } from 'react';

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  const [page, setPage] = useState('dashboard');
  const [firstVisit, setFirstVisit] = useState(false);

  const savedSettings = () => {   
    let cryptoData = JSON.parse(localStorage.getItem('cryptoData'));   
    if (!cryptoData) {
      setPage('settings');
      setFirstVisit(true);
    }
  };

  const confirmFavorites = () => {
    setFirstVisit(false);
    setPage('dashboard');
    localStorage.setItem('cryptoData', JSON.stringify({test: 'hello'}))
  };

  return (
    <Provider
      value={{
        page,
        setPage,
        firstVisit,
        savedSettings,
        confirmFavorites,
      }}
    >
      {children}
    </Provider>
  );
};

export { AppContext, AppProvider };

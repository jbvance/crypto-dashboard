import React, { useEffect, createContext, useState } from 'react';
const cc = require('cryptocompare');

const AppContext = createContext();
const { Provider } = AppContext;

const AppProvider = ({ children }) => {
  useEffect(() => {
    const fetchCoins = async () => {
      let data = await cc.coinList();
     setCoinList(data.Data);     
    }

    fetchCoins();
  }, [])
  const [page, setPage] = useState('dashboard');
  const [firstVisit, setFirstVisit] = useState(false);
  const [coinList, setCoinList] = useState(null);

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
        coinList
      }}
    >
      {children}
    </Provider>
  );
};

export { AppContext, AppProvider };

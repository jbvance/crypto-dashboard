import React, { useEffect, createContext, useState } from 'react';
const cc = require('cryptocompare');
cc.setApiKey(
  '5447ab40698e10665fd0d06a37557e8f689ca612b85638fdda41450924a65469'
);

const AppContext = createContext();
const { Provider } = AppContext;
const MAX_FAVORITES = 10;

const AppProvider = ({ children }) => {
  useEffect(() => {
    const fetchCoins = async () => {
      let data = await cc.coinList();
      setCoinList(data.Data);   
      savedSettings();        
    };

    fetchCoins();    
  }, []);
  const [page, setPage] = useState('dashboard');
  const [firstVisit, setFirstVisit] = useState(true);
  const [coinList, setCoinList] = useState(null);
  const [favorites, setFavorites] = useState(['BTC', 'ETH', 'XMR', 'DOGE']);

  const savedSettings = () => {
    let cryptoData = JSON.parse(localStorage.getItem('cryptoData'));
    if (!cryptoData) {
      setPage('settings');
      setFirstVisit(true);
    } else {
      setFavorites(cryptoData.favorites);
    }
  };

  const confirmFavorites = () => {
    setFirstVisit(false);
    setPage('dashboard');
    localStorage.setItem('cryptoData', JSON.stringify({ favorites}));
  };

  const addCoin = (key) => {
    let favs = [...favorites];
    if (favs.length < MAX_FAVORITES) {
      favs.push(key);
      setFavorites(favs);
    }
  };

  const removeCoin = (key) => {
    setFavorites(favorites.filter((fav) => fav !== key));
  };

  const isInFavorites = (key) => {   
    return favorites.indexOf(key) > 0;
  };

  return (
    <Provider
      value={{
        page,
        setPage,
        firstVisit,
        savedSettings,
        confirmFavorites,
        coinList,
        favorites,
        addCoin,
        removeCoin,
        isInFavorites,
      }}
    >
      {children}
    </Provider>
  );
};

export { AppContext, AppProvider };

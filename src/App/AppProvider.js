import React, { useEffect, createContext, useState } from 'react';
const cc = require('cryptocompare');
cc.setApiKey(
  '5447ab40698e10665fd0d06a37557e8f689ca612b85638fdda41450924a65469'
);

const AppContext = createContext();
const { Provider } = AppContext;
const MAX_FAVORITES = 10;

const AppProvider = ({ children }) => {
  const [page, setPage] = useState('dashboard');
  const [firstVisit, setFirstVisit] = useState(true);
  const [coinList, setCoinList] = useState(null);
  const [favorites, setFavorites] = useState([]); //useState(['BTC', 'ETH', 'XMR', 'DOGE']);
  const [filteredCoins, setFilteredCoins] = useState(null);
  const [prices, setPrices] = useState(null);
  const [loadingPrices, setLoadingPrices] = useState(false);

  useEffect(() => {
    const fetchCoins = async () => {
      let data = await cc.coinList();
      setCoinList(data.Data);
      savedSettings();
    };
    fetchCoins();
  }, []);

  useEffect(() => {  
    fetchPrices();    
  }, [firstVisit]);

  const savedSettings = () => {
    let cryptoData = JSON.parse(localStorage.getItem('cryptoData'));
    console.log('CD', cryptoData);
    if (!cryptoData) {
      setPage('settings');
      setFirstVisit(true);
    } else {
      setFirstVisit(false);
      setFavorites(cryptoData.favorites);
    }
  };

  const confirmFavorites = () => {
    setFirstVisit(false);
    setPage('dashboard');
    fetchPrices();
    localStorage.setItem('cryptoData', JSON.stringify({ favorites }));
  };

  const fetchPrices = async () => {
    setLoadingPrices(true);
    console.log('FETCHING PRICES');
    if (firstVisit) {
      return;
    }
    let filteredPrices = await getPrices();
    console.log(filteredPrices);
    filteredPrices = filteredPrices.filter(
      (price) => Object.keys(price).length
    );
    setPrices(filteredPrices);
    setLoadingPrices(false);
  };

  const getPrices = async () => {
    let returnData = [];
    for (let i = 0; i < favorites.length; i++) {
      try {
        let priceData = await cc.priceFull(favorites[i], 'USD');
        returnData.push(priceData);
      } catch (e) {
        console.warn('Fetch price error', e);
      }
    }
    return returnData;
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
        filteredCoins,
        setFilteredCoins,
        prices,
        loadingPrices,
      }}
    >
      {children}
    </Provider>
  );
};

export { AppContext, AppProvider };

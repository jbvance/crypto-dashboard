import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

const Content = ({ children }) => {  
  const appContext = useContext(AppContext);
  const { coinList, prices, firstVisit, loadingPrices } = appContext;
  if (!coinList) {
    return <div>Loading Coins...</div>;
  } 
  if ((!firstVisit && !prices) || loadingPrices) {
    return <div>Loading Prices</div>
  }
  return <div>{children}</div>;
};

export default Content;

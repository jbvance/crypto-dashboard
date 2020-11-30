import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

const Content = ({ children }) => {
  const appContext = useContext(AppContext);
  if (!appContext.coinList) {
    return <div>Loading Coins...</div>;
  }
  return <div>{children}</div>;
};

export default Content;

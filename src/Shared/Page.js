import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

const Page = ({ name, children }) => {
  const appContext = useContext(AppContext); 
  if (appContext.page !== name) {
    return <div></div>;
  }
  return <div>{children}</div>;
};

export default Page;

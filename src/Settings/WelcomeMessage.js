import { first } from 'lodash';
import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';

const WelcomeMessage = () => {
  const appContext = useContext(AppContext);
  const { firstVisit } = appContext;   
  if (!firstVisit) {
    return null;
  }

  return (
    <h1>Welcome to your Crypto Dashboard!</h1>
  );
};

export default WelcomeMessage;
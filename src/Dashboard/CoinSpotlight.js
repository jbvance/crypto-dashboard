import { constituentExchangeList } from 'cryptocompare';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { Tile } from '../Shared/Tile';

const SpotlightName = styled.h2`
  text-align: center;
`;

const CoinSpotlight = () => {
  const appContext = useContext(AppContext);
  const { currentFavorite, coinList } = appContext; 
  return (
    <Tile>
      <SpotlightName> {coinList[currentFavorite] && coinList[currentFavorite].CoinName}</SpotlightName>
      <CoinImage spotlight coin={coinList[currentFavorite]} />
    </Tile>
  );
};

export default CoinSpotlight;

import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import CoinTile from './CoinTile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 15px;
  margin-top: 40px;
`;

const getLowerSectionCoins = (coinList,filteredCoins) => {
  console.log(coinList, filteredCoins);
  if(filteredCoins) {
    console.log('YESSSS', filteredCoins);
  }
  return (
    (filteredCoins && Object.keys(filteredCoins)) ||
    Object.keys(coinList).slice(0, 100)
  );
};

const getCoinsToDisplay = (coinList, topSection, favorites, filteredCoins) => {
  console.log('GOT HERE', topSection)
  return topSection ? favorites : getLowerSectionCoins(coinList, filteredCoins);
};

const CoinGrid = ({ topSection }) => {
  const appContext = useContext(AppContext);
  const { coinList, favorites, filteredCoins } = appContext;
  return (
    <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(
        (coinKey) => (
          <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
        )
      )}
    </CoinGridStyled>
  );
};

export default CoinGrid;

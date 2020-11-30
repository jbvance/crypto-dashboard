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

const getCoinsToDisplay = (coinList, topSection, favorites) => {
  console.log(coinList, favorites, topSection);
  return topSection ? favorites : Object.keys(coinList).slice(0, topSection ? 10 : 100);
}

const CoinGrid = ({ topSection }) => {
  const appContext = useContext(AppContext);
  const {coinList, favorites } = appContext; 
  return (
    <CoinGridStyled>
      {getCoinsToDisplay(coinList, topSection, favorites).map((coinKey) => (
        <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;

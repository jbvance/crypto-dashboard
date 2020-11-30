import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CoinGrid = () => {
  const appContext = useContext(AppContext);
  const coinList = appContext.coinList;
  return (
    <CoinGridStyled>
      {Object.keys(coinList).map((coinKey) => (
        <div>{coinKey}</div>
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;

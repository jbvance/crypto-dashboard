import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import { AppContext } from '../App/AppProvider';
import { Tile, SelectableTile} from '../Shared/Tile';

export const CoinGridStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
`;

const CoinGrid = () => {
  const appContext = useContext(AppContext);
  const coinList = appContext.coinList;
  return (
    <CoinGridStyled>
      {Object.keys(coinList).map((coinKey) => (
        <SelectableTile>{coinKey}</SelectableTile>
      ))}
    </CoinGridStyled>
  );
};

export default CoinGrid;

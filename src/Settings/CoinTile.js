import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';

const CoinTile = ({ coinKey, topSection }) => {
  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  }
  const appContext = useContext(AppContext);
  const coinList = appContext.coinList;
  let coin = coinList[coinKey];
  return (
    <TileClass>
      <CoinHeaderGrid
        topSection={topSection}
        name={coin.CoinName}
        symbol={coin.Symbol}
      />
      <CoinImage coin={coin} />
    </TileClass>
  );
};

export default CoinTile;

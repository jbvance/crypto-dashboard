import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { SelectableTile, DeletableTile, DisabledTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';

const clickCoinHandler = (topSection, coinKey, addCoin, removeCoin) => {
  return topSection
    ? () => {
        removeCoin(coinKey);
      }
    : () => {
        addCoin(coinKey);
      };
};

const CoinTile = ({ coinKey, topSection }) => {
  const appContext = useContext(AppContext);
  const { coinList, addCoin, removeCoin, isInFavorites } = appContext;
  let coin = coinList[coinKey];
  
  let TileClass = SelectableTile;
  if (topSection) {
    TileClass = DeletableTile;
  } else if (isInFavorites(coinKey)) {
    TileClass = DisabledTile;
  }  
  return (
    <TileClass
      onClick={clickCoinHandler(topSection, coinKey, addCoin, removeCoin)}
    >
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

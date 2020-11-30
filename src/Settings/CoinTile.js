import React, { useContext } from 'react';
import { AppContext } from '../App/AppProvider';
import CoinImage from '../Shared/CoinImage';
import { SelectableTile } from '../Shared/Tile';
import CoinHeaderGrid from './CoinHeaderGrid';


const CoinTile = ({ coinKey }) => {
  const TileClass = SelectableTile;
  const appContext = useContext(AppContext);
  const coinList = appContext.coinList;
  let coin = coinList[coinKey];
  return (
   <TileClass>
     <CoinHeaderGrid name={coin.CoinName} symbol={coin.Symbol} />
     <CoinImage coin={coin} />
   </TileClass>
  );
};

export default CoinTile;
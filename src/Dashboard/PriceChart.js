import React, {useContext} from 'react';
import ReactHighcharts from 'react-highcharts';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import highchartsConfig from './HighchartsConfig';
import HighchartsTheme from './HighchartsTheme';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  const appContext = useContext(AppContext);
  const {historical} = appContext;
  return (
    <Tile>
      {historical ? <ReactHighcharts config={highchartsConfig(historical)}/> : <div>Loading Data...</div>}
    </Tile>
  );
}

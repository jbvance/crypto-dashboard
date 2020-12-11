import React, {useContext} from 'react';
import ReactHighcharts from 'react-highcharts';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import ChartSelect from './ChartSelect';
import highchartsConfig from './HighchartsConfig';
import HighchartsTheme from './HighchartsTheme';
ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function() {
  const appContext = useContext(AppContext);
  const {historical, changeChartSelect} = appContext;
  return (
    <Tile>
      <ChartSelect 
      defaultValue={"months"}
      onChange={e => changeChartSelect(e.target.value)}
      >
        <option value="days">Days</option>
        <option value="weeks">Weeks</option>
        <option value="months">Months</option>
      </ChartSelect>
      {historical ? <ReactHighcharts config={highchartsConfig(historical)}/> : <div>Loading Data...</div>}
    </Tile>
  );
}

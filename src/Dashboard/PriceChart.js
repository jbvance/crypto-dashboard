import React, {useContext} from 'react';
import ReactHighcharts from 'react-highcharts';
import { AppContext } from '../App/AppProvider';
import { Tile } from '../Shared/Tile';
import highchartsConfig from './HighchartsConfig';

export default function() {
  const appContext = useContext(AppContext);
  return (
    <Tile>
      <ReactHighcharts config={highchartsConfig()}/>
    </Tile>
  );
}

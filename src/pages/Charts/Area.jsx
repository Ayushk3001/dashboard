import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective
  , Inject, DateTime, Legend,SplineAreaSeries
 } from '@syncfusion/ej2-react-charts';

 import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy';

 import { useStateContext } from '../../contexts/ContextProvider';
 import { Header } from '../../components';


const Area = () => {
  const { currentMode } = useStateContext();
  return (
        <div className='m-d md:10 mt-24 p-10bg-white
        dark:bg-secondary-dark-bg rounded-3xl'>
           <Header category='Area' title='Inflation Rate in Percentage'/>
          <ChartComponent
    id='line-chart'
    height='420px'
    primaryXAxis={areaPrimaryXAxis}
    primaryYAxis={areaPrimaryYAxis}
    chartArea={{border: {width: 0}}}
    tooltip={{enable: true}}
    background={currentMode === 'Dark' ? '#33373E' : '#fff' }
    >


      <Inject services={[SplineAreaSeries, DateTime, Legend, ]}/>
      <SeriesCollectionDirective>
        {areaCustomSeries.map((item, index) => 
        <SeriesDirective key = {index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
    </div>

  )
}

export default Area
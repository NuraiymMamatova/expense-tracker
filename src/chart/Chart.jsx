import React from 'react'
import "./Chart.css";
import ChartBar from './ChartBar';

const Chart = ({dataPoits}) => {

    const dataPointsValues = dataPoits.map((data) => data.value);
    const totalMax = Math.max(...dataPointsValues);

  return (
    <div className='chart'>
        {dataPoits.map
        ((point) => {
            
            return <ChartBar key={point.label} label={point.label} value={point.value} totalMax={totalMax}/>
        })}
    </div>
  )
}

export default Chart
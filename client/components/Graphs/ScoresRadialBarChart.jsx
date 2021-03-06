import React, {Component} from 'react';
import { RadialBarChart, RadialBar, Legend, Tooltip} from 'recharts';


const ScoresRadialBarChart = (props) => {
        return(
            <div className='radialBarChart'>
                <h2 className="title">Scores</h2>
                <RadialBarChart 
                    width={300}
                    height={300} 
                    data={props.sleepScores} 
                    outerRadius={150} 
                    startAngle={180} 
                    endAngle={0}
                    style={{color: 'black', backgroundColor: 'white'}}
                >
                    <RadialBar minAngle={15} label={{ fill: '#666', position: 'top' }} background clockWise={true} dataKey='score' />
                    <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='bottom' align="center" />
                    <Tooltip content={<CustomTooltip payload={props.sleepScores} label={'Last Night'}/>}/>
                </RadialBarChart>
            </div>
      )
}

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.name} : ${payload[0].payload.score}`}</p>
      </div>
    );
  }
  return null;
}


export default ScoresRadialBarChart;
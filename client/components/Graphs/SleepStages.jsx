import React, {Component} from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip} from 'recharts';
  
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SleepStages = (props) => {
        return(
            <div>                
                <h2 className="title">Time Spent per Stage (By Percentage)</h2>
                <PieChart width={500} height={500}>
                    <Pie 
                        data={props.sleepStages} 
                        dataKey="value" 
                        nameKey="name" 
                        cx="50%" 
                        cy="50%" 
                        outerRadius={150} 
                        fill='black' 
                        label={true}
                        labelLine={true}
                    >
                    {props.sleepStages.map((entry, index) => (
                    <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]} 
                    />
                        ))}
                    </Pie>
                    
                    <Legend />
                    <Tooltip />
                </PieChart>
            </div>
    )
}

export default SleepStages;
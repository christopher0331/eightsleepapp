import React, { Component } from 'react';
import Selector from '../Selector.jsx';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class RoomTemp extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div>   
            <h2 className="title2">Sleep Statistics</h2> 
            <Selector currentView={this.props.currentView} updateData={this.props.updateData}/>
                <LineChart 
                  width={730} 
                  height={250} 
                  data={this.props.data}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Room Temp" stroke="#8884d8" />
                </LineChart>  
            </div>
        );
    }
}

export default RoomTemp;
import React, { Component } from 'react';
import Selector from '../Selector.jsx';
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';

class AllGraph extends Component {
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <div id="selector">   
            <Selector updateData={this.props.updateData} currentView={this.props.currentView}/>
            <h2 className="title2">Sleep Statistics</h2> 
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
                    <Line type="monotone" dataKey="Heart Rate" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Room Temp" stroke="green" />
                    <Line type="monotone" dataKey="Bed Temp" stroke="red" />
                    <Line type="monotone" dataKey="Respiratory Rate" stroke="blue" />
                </LineChart>  
            </div>
        );
    }
}

export default AllGraph;
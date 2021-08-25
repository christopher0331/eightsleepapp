import axios from 'axios';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';


class TimeSeries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }

    
    render() {
        return (
            <div>
                <LineChart 
                  width={730} 
                  height={250} 
                  data={this.props.timeSeries}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="heartRate" stroke="#8884d8" />
                    <Line type="monotone" dataKey="tempRoomC" stroke="green" />
                    <Line type="monotone" dataKey="tempBedC" stroke="red" />
                    <Line type="monotone" dataKey="respiratoryRate" stroke="blue" />

                </LineChart>  
            </div>
        );
    } 
}

export default TimeSeries;
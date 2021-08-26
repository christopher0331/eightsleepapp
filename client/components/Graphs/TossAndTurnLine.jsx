import axios from 'axios';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Selector from '../Selector.jsx';

class TossAndTurns extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
         
        }
        this.updateData = this.updateData.bind(this);
    }
    updateData(series){
        this.setState({ graph: series.target.value})
    }

    render() {
            return (
                <div id="selector">   
                <h2 className="title2">Toss and Turns</h2> 
                    <LineChart 
                      width={730} 
                      height={250} 
                      data={this.props.tossAndTurns}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Toss And Turns" stroke="#8884d8" />
                    </LineChart>  
                </div>
            );
    }
}

export default TossAndTurns;
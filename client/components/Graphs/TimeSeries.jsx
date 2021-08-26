import axios from 'axios';
import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Selector from '../Selector.jsx';

class TimeSeries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            graph: 'heartRate'
        }
        this.updateData = this.updateData.bind(this);


    }
    updateData(series){
        this.setState({ graph: series.target.value})
    }

    render() {
        if(this.state.graph === 'all'){
            return (
                <div id="selector">   
                <Selector updateData={this.updateData}/>
                <h2 className="title2">Sleep Statistics</h2> 
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
                        <Line type="monotone" dataKey="Heart Rate" stroke="#8884d8" />
                        <Line type="monotone" dataKey="Room Temp" stroke="green" />
                        <Line type="monotone" dataKey="Bed Temp" stroke="red" />
                        <Line type="monotone" dataKey="Respiratory Rate" stroke="blue" />
                    </LineChart>  
                </div>
            );
        } else if(this.state.graph === 'heartRate'){
            return(
                <div>   
                <h2 className="title2">Sleep Statistics</h2> 
                <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                        <Line type="monotone" dataKey="Heart Rate" stroke="#8884d8" />
                    </LineChart>  
                </div>
            )
        } else if(this.state.graph === 'roomTemp'){
            return(
            <div>   
                <h2 className="title2">Sleep Statistics</h2> 
                <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                        <Line type="monotone" dataKey="Room Temp" stroke="#8884d8" />
                    </LineChart>  
                </div>
            )
        } else if(this.state.graph === 'bedTemp'){
            return(
            <div>   
                <h2 className="title2">Sleep Statistics</h2>
                <Selector currentView={this.state.showHabit} updateData={this.updateData}/> 
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
                        <Line type="monotone" dataKey="Bed Temp" stroke="#8884d8" />
                    </LineChart>  
                </div>
            )
        } else if(this.state.graph === 'respiratory'){
            return(
            <div>   
                <h2 className="title2">Sleep Statistics</h2> 
                <Selector currentView={this.state.showHabit} updateData={this.updateData}/>
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
                        <Line type="monotone" dataKey="Respiratory Rate" stroke="#8884d8" />
                    </LineChart>  
                </div>
            )
        } 
    } 
}

export default TimeSeries;
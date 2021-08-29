import axios from 'axios';
import React, { lazy, Suspense } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Selector from '../Selector.jsx';

const AllGraph = lazy(() => import('./AllGraph.jsx'));
const RespiratoryRate = lazy(() => import('./RespiratoryRate.jsx'));
const BedTemp = lazy(() => import('./BedTemp.jsx'));
const RoomTemp = lazy(() => import('./RoomTemp.jsx'));

class TimeSeries extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            graph: 'Heart Rate'
        }
        
        this.updateData = this.updateData.bind(this);
    }

    updateData(series){
        this.setState({ graph: series.target.value})
    }

    render() {
        if(this.state.graph === 'All'){
            return (
                <Suspense fallback={<div>Loading...</div>}>
                    <AllGraph updateData={this.updateData} data={this.props.timeSeries} currentView={this.state.graph}/>
                </Suspense>
            );
        } else if(this.state.graph === 'Heart Rate'){
            return(
                <div>   
                <h2 className="title2">Sleep Statistics</h2> 
                <Selector updateData={this.updateData} currentView={this.state.graph} />
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
        } else if(this.state.graph === 'Room Temp'){
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <RoomTemp updateData={this.updateData} data={this.props.timeSeries} currentView={this.state.graph}/>
                </Suspense>
            )
        } else if(this.state.graph === 'Bed Temp'){
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <BedTemp updateData={this.updateData} data={this.props.timeSeries} currentView={this.state.graph}/>
                </Suspense>
            )
        } else if(this.state.graph === 'Respiratory Rate'){
            return(
                <Suspense fallback={<div>Loading...</div>}>
                    <RespiratoryRate updateData={this.updateData} data={this.props.timeSeries} currentView={this.state.graph}/>
                </Suspense>
            )
        } 
    } 
}

export default TimeSeries;
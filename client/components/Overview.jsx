import React from 'react';
import axios from 'axios';
import ScoresRadialBarChart from './Graphs/ScoresRadialBarChart.jsx'
import SleepStages from './Graphs/SleepStages.jsx';
import TimeSeries from './Graphs/TimeSeries.jsx';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            timeStart: 0,
            sleepStages: [],
            scores: [],
            timeseries: []
        }
    }


    componentDidMount(){
        axios.get(`/sleepData/${this.props.username}`)
            .then((response) => {
                this.setState({
                    timeStart: response.data[0],
                    sleepStages: response.data[1],
                    scores: response.data[2],
                    timeseries: response.data[3]
                })
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render(){
        if(this.state.scores.length > 0){
            return(
                <div>
                    <h1>Sleep Report</h1>
                    <ScoresRadialBarChart sleepScores={this.state.scores}/>
                    <SleepStages sleepStages={this.state.sleepStages}/>
                    <TimeSeries timeSeries={this.state.timeseries}/>
                </div>
            )
        } else {
            return(
                <div>Loading!</div>
            )
        }
    }
}

export default App;
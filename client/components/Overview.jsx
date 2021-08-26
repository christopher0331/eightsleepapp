import React from 'react';
import axios from 'axios';
import ScoresRadialBarChart from './Graphs/ScoresRadialBarChart.jsx'
import SleepStages from './Graphs/SleepStages.jsx';
import TimeSeries from './Graphs/TimeSeries.jsx';
import UserSelector from './UserSelector.jsx';
import userSignatures from '../../userSignatures.js';
import DateSelector from './DateSelector.jsx';
import TossAndTurns from './Graphs/TossAndTurnLine.jsx';

class OverView extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            useState: false,
            signature: this.props.signature,
            username: this.props.username,
            timeStart: 0,
            sleepStages: [],
            scores: [],
            timeseries: [],
            tossAndTurns: [],
            date: 0
        }

        this.fetchData = this.fetchData.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.handleUserSubmit = this.handleUserSubmit.bind(this);
        this.handleDateSubmit = this.handleDateSubmit.bind(this);
        this.changeDate = this.changeDate.bind(this);

    }


    componentDidMount(){
        this.fetchData(this.state.signature)
     }

    fetchData(signature){
        axios.get(`/sleepData/${signature}/${this.state.date}`)
        .then((response) => {
            this.setState({
                timeStart: response.data[0],
                sleepStages: response.data[1],
                scores: response.data[2],
                timeseries: response.data[3],
                tossAndTurns: response.data[4] 
            })
        })
        .catch((err) => {
            console.error(err);
        })
     }    

    changeUser(name){
        this.setState({
            username: name.target.value
        })

        if(name.target.value === "Chris"){
            this.setState({
                signature: userSignatures.user1
            })
        } else if(name.target.value === "Cindy"){
            this.setState({
                signature: userSignatures.user2
            })
        } else if(name.target.value === "Jane"){
            this.setState({
                signature: userSignatures.user3
            })
        }
    }
    
    changeDate(date){
        this.setState({
            date: date.target.value
        })
    }

    handleUserSubmit(event) {
        this.fetchData(this.state.signature)
        event.preventDefault();
      }

    handleDateSubmit(event) {
        this.fetchData(this.state.signature)
        event.preventDefault();
      }

    render(){
        if(this.state.scores.length > 0){
            return(
                <div>               
                    <div id="sleepReport">Sleep Report</div>
                    <div className='selectors'>
                        <UserSelector username={this.state.username} handleUserSubmit={this.handleUserSubmit} changeUser={this.changeUser}/>
                        <DateSelector date={this.state.date} handleDateSubmit={this.handleDateSubmit} changeDate={this.changeDate}/>
                    </div>
                    <div className="primaryGraphs">
                        <ScoresRadialBarChart sleepScores={this.state.scores}/>
                        <TossAndTurns tossAndTurns={this.state.tossAndTurns}/>
                    </div>
                    <div className="secondaryGraphs">
                        <SleepStages sleepStages={this.state.sleepStages}/>
                        <TimeSeries timeSeries={this.state.timeseries} tossAndTurns={this.state.tossAndTurns}/>
                    </div>
                </div>
            )
        } else {
            return(
                <div>Loading!</div>
            )
        }
    }
}

export default OverView;
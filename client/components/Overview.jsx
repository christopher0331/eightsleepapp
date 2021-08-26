import React from 'react';
import axios from 'axios';
import ScoresRadialBarChart from './Graphs/ScoresRadialBarChart.jsx'
import SleepStages from './Graphs/SleepStages.jsx';
import TimeSeries from './Graphs/TimeSeries.jsx';
import GeneralStats from './Graphs/GeneralStats.jsx';
import UserSelector from './UserSelector.jsx';
import userSignatures from '../../userSignatures.js';

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
            date: 0
        }

        this.fetchData = this.fetchData.bind(this);
        this.changeUser = this.changeUser.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        console.log('1', this.state.signature)
        this.fetchData(this.state.signature)
     }

    fetchData(signature){
        axios.get(`/sleepData/${signature}/${0}`)
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
    
    handleSubmit(event) {
        this.fetchData(this.state.signature)
        event.preventDefault();
      }

    render(){
        if(this.state.scores.length > 0){
            return(
                <div>               
                    <div id="sleepReport">Sleep Report</div>
                    <form className="overview" onSubmit={this.handleSubmit}>
                        <label>
                        Select User:
                    <div className="userSelector">    
                            <select value={this.state.username} onChange={this.changeUser}>
                                <option value="Chris">Chris</option>
                                <option value="Cindy">Cindy</option>
                                <option value="Jane">Jane</option>
                            </select>   
                        </div>  
                        <input type="submit" value="Submit" style={{width: '100px'}}/>
                        </label>
                    </form>
                    
                    <div className="primaryGraphs">
                        <ScoresRadialBarChart sleepScores={this.state.scores}/>
                        <GeneralStats />
                    </div>
                    <div className="secondaryGraphs">
                        <SleepStages sleepStages={this.state.sleepStages}/>
                        <TimeSeries timeSeries={this.state.timeseries}/>
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
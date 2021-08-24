import React, { Component } from 'react';
import axios from 'axios';
import OverView from './Overview.jsx';
import LogInScreen from './LogInScreen.jsx';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            loggedIn: '',
            username: '',
            password: ''
        }

        this.changeView = this.changeView.bind(this);
    }


    changeView(username, password){
        
        if(!this.state.loggedIn){
            if(username === 'Chris'){
                username = "f9bf229fd19e4c799e8c19a962d73449"
            } else if(username === 'Cindy'){
                username = "d6c1355e38194139b8d0c870baf86365"
            } else if(username === 'Jane'){
                username = "2228b530e055401f81ba37b51ff6f81d"
            }

            this.setState({
                loggedIn: true,
                username: username,
                password: password
            })
        }
    }

    render(){
        if(!this.state.loggedIn){
            return(
                <div>
                    <LogInScreen changeView={this.changeView}/>
                </div>
            )
        } else if(this.state.loggedIn && this.state.username){
            return(
                <div>
                    <OverView username={this.state.username}/> 
                </div>
            )
        } else {
            return(
                <div>Loading...</div>

            )
        }
        
    }
}

export default App;
import React, { Component } from 'react';
import OverView from './Overview.jsx';
import LogInScreen from './LogInScreen.jsx';
import userSignatures from '../../userSignatures.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            loggedIn: false,
            username: '',
            password: ''
        }
        this.changeView = this.changeView.bind(this);
    }


    changeView(username, password){
        
        if(!this.state.loggedIn){
            if(username === 'Chris'){
                username = userSignatures.user1
            } else if(username === 'Cindy'){
                username = userSignatures.user2
            } else if(username === 'Jane'){
                username = userSignatures.user3
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
                <div className='initialContainer'>
                    <Header />
                    <OverView username={this.state.username}/> 
                    <Footer />
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
import React, { Component } from 'react';
import OverView from './Overview.jsx';
import LogInScreen from './LogInScreen.jsx';
import userSignatures from '../../userSignatures.js';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { Puff } from 'react-loading-icons'

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            loggedIn: false,
            signature: '',
            username: '',
            password: ''
        }

        this.changeView = this.changeView.bind(this);
    }


    changeView(username, password){
        if(username.length < 3){
            alert("Please sign in using Chris, Cindy, or Jane. No password required.")
        } else {
            let signature = '';
            if(!this.state.loggedIn){
                if(username === 'Chris'){
                    signature = userSignatures.user1
                } else if(username === 'Cindy'){
                    signature = userSignatures.user2
                } else if(username === 'Jane'){
                    signature = userSignatures.user3
                }
    
                this.setState({
                    loggedIn: true,
                    username: username,
                    signature: signature,
                    password: password
                })
            }
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
                    <OverView signature={this.state.signature} username={this.state.username} changeView={this.changeView}/> 
                    <Footer />
                </div>
            )
        } else {
            return(
                <div>
                    LLLLLLL
                </div>
            )
        }
        
    }
}

export default App;
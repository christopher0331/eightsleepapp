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
            signature: '',
            username: '',
            password: ''
        }

        this.changeView = this.changeView.bind(this);
    }


    changeView(username, password){
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
                <div>Loading...</div>
            )
        }
        
    }
}

export default App;
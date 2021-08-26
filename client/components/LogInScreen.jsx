import React from 'react';

class LogInScreen extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            password: ''
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        alert('Welcome Back: ' + this.state.username);
        event.preventDefault();
    }

    render(){
        return(
            <div className="login">
                <h1 style={{color: 'white'}}>Sign In</h1>
                <form onSubmit={() => this.props.changeView(this.state.username)}>
                <label>
                    Username:
                    <input type="text" id="username" value={this.state.value} onChange={this.handleUsernameChange} />
                </label>
                <label>
                    Password:
                    <input type="text" id="pwd" value={this.state.value} onChange={this.handlePasswordChange} />
                </label>
                <input type="submit" id='loginSubmit'  value="Submit" />
            </form>
            </div>
        )
    }


    }

export default LogInScreen;
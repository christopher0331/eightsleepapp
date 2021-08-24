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
            <div>
                <form onSubmit={() => this.props.changeView(this.state.username, this.state.password)}>
                <label>
                    Username:
                    <input type="text" value={this.state.value} onChange={this.handleUsernameChange} />
                </label>
                <label>
                    PassWord:
                    <input type="text" value={this.state.value} onChange={this.handlePasswordChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        )
    }


    }

export default LogInScreen;
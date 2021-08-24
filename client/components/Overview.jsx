import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {
        }
    }

    

    componentDidMount(){
        axios.get(`/sleepData/${this.props.username}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.error(err);
            })
            console.log('user1', this.state.user2)

    }

    render(){
        return(
            <div>
                React is working
            </div>
        )
    }
}

export default App;
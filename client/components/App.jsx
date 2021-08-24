import React from 'react';
import axios from 'axios';

class App extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }

    componentDidMount(){
        axios.get('/sleepData')
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.error(err);
            })
    }

    render(){
        return(
            <div>React is working</div>
        )
    }
}

export default App;
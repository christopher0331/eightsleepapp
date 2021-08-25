import React from 'react';

class Header extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        return(
            <div>
                <img src='https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/eightsleep/header.png' style={{width: window.innerWidth}} />
            </div>
        )
    }
}

export default Header

import React from 'react';

class Footer extends React.Component {
    constructor(props){
        super(props)

        this.state = {

        }
    }


    render(){
        return(
            <div className='hello'>
                <img src='https://greenviewsolutionsimages.s3.us-west-1.amazonaws.com/HomePage/SmallSizedWEBP/eightsleep/footer.png' style={{width: window.innerWidth}} />
            </div>
        )
    }
}

export default Footer

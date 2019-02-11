import React, { Component } from 'react';

/* Components */
import Footer from './footer';

class Videos extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

   

    render(){        
        return(
            <div className="page-body">
                <div className="content-container">
                    { /* Body */}
                    <div className="body-container">
                        <h1>Videos</h1>
                    </div>
                    <Footer />
                </div>
            </div>    
        );        
    }

    componentDidMount(){
        //let self = this;        
    }
}

export default Videos;
import React, { Component } from 'react';

/* Components */
import Footer from './footer';

class Gallery extends Component{
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
                        <h1>Gallery</h1>
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

export default Gallery;
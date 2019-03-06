import React, { Component } from 'react';

/* Components */
import Footer from './footer';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner1.png';

class Shows extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

   

    render(){        
        return(
            <div className="page-body">
                <div className="background-container"><img className="background-img" src={backgroundImg}></img></div>
                <div className="content-container">
                    { /* Body */}
                    <div className="body-container tst">
                        <h1>Gandhi3x</h1>
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

export default Shows;
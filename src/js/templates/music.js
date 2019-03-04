import React, { Component } from 'react';

/* Components */
import Footer from './footer';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner2.png';

class Music extends Component{
    constructor(props) {
        super(props);

        this.state = {
            music:{
                albums:[
                    {"title":"Album 1", "additionalInfo":"", "date":"2018-11-20", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":""},
                    {"title":"Album 2", "additionalInfo":"Beats by Drty Wahol", "date":"2019-01-20", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":""},
                    {"title":"Album 3", "additionalInfo":"", "date":"2018-09-25", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":""},
                    {"title":"Album 4", "additionalInfo":"", "date":"2018-07-10", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":""},
                    {"title":"Album 5", "additionalInfo":"", "date":"2018-01-05", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":""},
                    {"title":"Album 6", "additionalInfo":"", "date":"2017-12-04", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":""}
                ],
                mixtapes:[
                    {"title":"", "additionalInfo":"", "date":null, "url":"", "img":""}
                ],
                songs:[
                    {"title":"", "additionalInfo":"", "date":null, "links":[{"type":"", "url":""}], "img":""}
                ],
            }
        }
    }

   

    render(){        
        return(
            <div className="page-body">
                <div className="background-container"><img className="background-img" src={backgroundImg}></img></div>
                <div className="content-container">
                    { /* Body */}
                    <div className="body-container">
                        <h1>Music</h1>
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

export default Music;
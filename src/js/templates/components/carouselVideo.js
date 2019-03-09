import React, { Component } from 'react';

import defaultImg from '../../../assets/img/DefaultImg.PNG';
import defaultImgAlt from '../../../assets/img/DefaultImgW.PNG';

class CarouselVideo extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }  

    render(){        
        return(
            <div className="carousel-container music">
                <div className="music-container">
                    <div className="item music-info">
                        <div className="music-banner">{'New ' + this.props.item.class}</div>
                        <h2 className="music-title">{this.props.item.content.title}</h2>
                    </div>
                    <div className="item video-img">
                        <a href={"https://www.youtube.com/watch?v="+this.props.item.content.urlcode} target="_blank" className="video-container">
                            <span className="video-type">Youtube</span>
                            <img alt="item" src={(this.props.item.content.urlcode && this.props.item.content.urlcode !== "" ? "http://img.youtube.com/vi/"+ this.props.item.content.urlcode +"/hqdefault.jpg" : defaultImgAlt)} />
                        </a>
                    </div>
                </div>
            </div>    
        );        
    }

    componentDidMount(){
        //let self = this;        
    }
}

export default CarouselVideo;
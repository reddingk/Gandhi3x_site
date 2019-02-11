import React, { Component } from 'react';

class CarouselCover extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

   

    render(){        
        return(
            <div className="carousel-container cover">
                <img alt="carousel item" src={this.props.item.img} />
                <div className="carousel-cover"></div>
                <h1 className={'page-title ' + this.props.item.class}>{this.props.item.content}</h1>
            </div>    
        );        
    }

    componentDidMount(){
        //let self = this;        
    }
}

export default CarouselCover;
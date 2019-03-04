import React, { Component } from 'react';

class CarouselEvent extends Component{
    constructor(props) {
        super(props);

        this.state = {}

        this.cleanDate = this.cleanDate.bind(this);
    }  

    render(){        
        return(
            <div className="carousel-container event">
                <div className="event-container">
                    <div className="carousel item event-img">
                        <img alt="carousel item" src={this.props.item.img} />
                    </div>
                    <div className="carousel item event-info">
                        <h2 className="event-title">{this.props.item.content.title}</h2>
                        <p className="event-text">{this.props.item.content.text}</p>
                        <p className="event-date">{this.cleanDate(this.props.item.content.date)}</p>
                        {this.props.item.content.links.map((item,i) => 
                            <a href={item.link} key={i} className="event-link" target="_blank">{item.title}</a>
                        )}
                    </div>
                </div>
            </div>    
        );        
    }

    componentDidMount(){
        //let self = this;        
    }

    cleanDate(date){
        var retdate = null;
        var Month = ["Jan", "Feb", "Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
        try {
            var d = new Date(date);
            retdate = Month[d.getMonth()] +" "+d.getDate() +", "+d.getFullYear() + " " 
            + ((d.getHours() +1 > 12) ? (d.getHours()+1) -12 : (d.getHours()+1)) +":"
            + ((d.getMinutes() < 10) ? "0"+d.getMinutes() : d.getMinutes())
            + ((d.getHours() +1 > 12) ? " PM" : " AM");
        }
        catch(ex){
            console.log("Error cleaning date: ", ex);
        }
        return retdate;
    }
}

export default CarouselEvent;
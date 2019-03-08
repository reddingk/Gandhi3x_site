import React, { Component } from 'react';

import defaultImg from '../../../assets/img/DefaultImg.PNG';
import defaultImgAlt from '../../../assets/img/DefaultImgW.PNG';

class CarouselEvent extends Component{
    constructor(props) {
        super(props);

        this.state = {}

        this.cleanDate = this.cleanDate.bind(this);
    }  

    render(){        
        return(
            <div className="carousel-container music">
                <div className="music-container">
                    <div className="carousel item music-info">
                        <h2 className="music-title">{this.props.item.content.title}</h2>
                    </div>
                    <div className="carousel item music-img">
                        <img alt="carousel item" src={(this.props.item.content.img && this.props.item.content.img !== "" ? this.props.item.content.img : defaultImgAlt)} />
                    </div>
                    <div className="carousel item music-info">
                        <p className="music-date"><span>{this.cleanDate(this.props.item.content.date, 'ddd MMM dd h a')}</span></p>                        
                        <p className="music-text">{this.props.item.content.additionalInfo}</p>                        
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

    cleanDate(dateStr, type){
        var ret = "";
        // parse Date
        var resList = dateStr.split(/\D/g);
        var monthList = ["Jan","Feb", "Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var dayList = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

        try {
            var dt = new Date(dateStr);
            switch (type){                
                case 'ddd MMM dd h a':
                    var retArray = [];

                    // Get Day String
                    var day = dt.getDay();
                    retArray.push(dayList[day]);

                    // Get Month
                    var tmpMonth = dt.getMonth();
                    retArray.push(monthList[tmpMonth]);

                    // Get Number Date
                    var tmpDay = dt.getDate();
                    retArray.push((tmpDay.length < 2 ? "0"+tmpDay : tmpDay));

                    // Get Time
                    var tmpHr = dt.getHours();
                    var tmpMin = dt.getMinutes();
                    tmpMin = (tmpMin.toString().length < 2 ? "0"+tmpMin : tmpMin);

                    if(tmpHr > 12){  retArray.push((tmpHr-12) + ":"+ tmpMin + "PM"); }
                    else { retArray.push(tmpHr + ":"+ tmpMin + "AM"); }   

                    ret = retArray.join(" ");
                    break;
                default:
                    break;
            }
        }
        catch(ex){
            console.log("Error Parsing Date");
        }
        return ret;
    }
}

export default CarouselEvent;
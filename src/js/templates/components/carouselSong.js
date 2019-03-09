import React, { Component } from 'react';

import defaultImg from '../../../assets/img/DefaultImg.PNG';
import defaultImgAlt from '../../../assets/img/DefaultImgW.PNG';

class CarouselSong extends Component{
    constructor(props) {
        super(props);

        this.state = {}

        this.cleanDate = this.cleanDate.bind(this);
        this.getLinkIcon = this.getLinkIcon.bind(this);
    }  

    getLinkIcon(link, key){
        switch(link.type){
            case "itunes":
                return <a href={link.url} target="_blank" key={key} className="music-link itunes"><i className="fab fa-apple"></i><span>Itunes</span></a>
            case "soundcloud":
                return <a href={link.url} target="_blank" key={key} className="music-link soundcloud"><i className="fab fa-soundcloud"></i><span>Soundcloud</span></a>
            case "spinrilla":
                return <a href={link.url} target="_blank" key={key} className="music-link spinrilla"><i className="fas fa-compact-disc"></i><span>Spinrilla</span></a>
            default:
                return <a href={link.url} target="_blank" key={key} className="music-link other"><i className="fas fa-music"></i><span>Music</span></a>
        }
    }

    render(){        
        return(
            <div className="carousel-container music">
                <div className="music-container">
                    <div className="item music-info">
                        <div className="music-banner">{'New ' + this.props.item.class}</div>
                        <h2 className="music-title">{this.props.item.content.title}</h2>
                    </div>
                    <div className="item music-img">
                        <img alt="item" src={(this.props.item.content.img && this.props.item.content.img !== "" ? this.props.item.content.img : defaultImgAlt)} />
                    </div>
                    <div className="item music-info">                        
                        <p className="music-text">{this.props.item.content.additionalInfo}</p>                        
                        <div className="music-links">
                            <p className="music-date"><span>Release Date: {this.cleanDate(this.props.item.content.date, 'MMM-dd-yyyy')}</span></p>
                            {this.props.item.content.links.map((item,i) => 
                                this.getLinkIcon(item,i)
                            )}
                        </div>
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
                case 'MMM-dd-yyyy':
                    var retArray = [];
                    
                    // Get Month
                    var tmpMonth = dt.getMonth();
                    retArray.push(monthList[tmpMonth]);

                    // Get Number Date
                    var tmpDay = dt.getDate();
                    retArray.push((tmpDay.length < 2 ? "0"+tmpDay : tmpDay));

                    // Get Year
                    var tmpYear = dt.getUTCFullYear();
                    retArray.push(tmpYear);

                    ret = retArray.join("-");
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

export default CarouselSong;
import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

/* Components */
import Footer from './footer';

/* Images */
import tmpImg from '../../assets/img/panda1.jpeg';

import backgroundImg from '../../assets/img/GandhiAli-banner1.png';
import defaultImg from '../../assets/img/DefaultImg.PNG';
import defaultImgAlt from '../../assets/img/DefaultImgW.PNG';

import emptyImg from '../../assets/img/AliTicket.png';

const carouselOptions = {
    duration:400,
    autoPlayInterval:7000,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
    }
};

class Shows extends Component{
    constructor(props) {
        super(props);

        this.rootPath = "";
        this.state = {
            events:[]
        }

        this.cleanDate = this.cleanDate.bind(this);
    }

    buildEvents(){
        return(
            this.state.events.map((event,i) => (
                <div key={i} className={"event-container" + (i === 0 ? " first" : "") + (i === (this.state.events.length -1) ? " last" : "")}>
                    <div className="event-subcontainer">
                        <div className={"img-container" + (event.empty == true ? " empty" : "")}>
                            <img src={(event.img && event.img !== "" ? event.img : defaultImgAlt)} />
                        </div>
                        <div className="event-info">
                            {event.empty === true ? 
                                <span />:
                                <div className="event-date"><span>{this.cleanDate(event.date, 'ddd MMM dd h a') }</span></div>
                            }
                            <div className="event-location">{event.location}</div>
                            <div className="event-title">{event.title}</div>
                            <div className="event-links">
                                {event.links.map((link,j) => (
                                    <a className="event-link" href={link.link} target="_blank">{link.title}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )
    }

    render(){   
        var events = this.buildEvents();

        return(
            <div className="page-body">
                <div className="background-container"><img className="background-img" src={backgroundImg}></img></div>
                <div className="content-container">                    
                    <div className="body-container page events">
                        <h1>Shows</h1>
                        <div className="events-container">
                            <div className="list-container show-space">                                    
                                <span className="ctrl-container">
                                    <span className="ctrl prev" onClick={() => this.Carousel._slidePrev()}><i className="fas fa-chevron-left"></i></span>
                                    <span className="ctrl next" onClick={() => this.Carousel._slideNext()}><i className="fas fa-chevron-right"></i></span>
                                </span>
                                <AliceCarousel className="events-carousel" items={events}
                                    duration={carouselOptions.duration} mouseDragEnabled={true} responsive={carouselOptions.responsive}
                                    buttonsDisabled={true} dotsDisabled={true} ref={ el => this.Carousel = el }/>                                           
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>    
        );        
    }

    loadEvents(){
        var self = this;
        var self = this;
        try {
            fetch(self.rootPath + "/api/getEvents")
            .then(function(response) {
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                if(!data.results || data.results.length == 0){
                    data.results.push({ "title":"More Events Coming Soon...", "empty":true, "img":emptyImg, "date":new Date(), links:[]})
                }
                self.setState({ events: data.results});
            }); 
        }
        catch(ex){
            console.log("Error Loading Latest Data: ", ex);
        }
    }

    cleanDate(dateStr, type){
        var ret = "";
                
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

    componentDidMount(){       
        this.loadEvents();
    }
}

export default Shows;
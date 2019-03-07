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
                        <div className="img-container">
                            <img src={(event.img && event.img !== "" ? event.img : defaultImgAlt)} />
                        </div>
                        <div className="event-info">
                            <div className="event-date"><span>{this.cleanDate(event.date, 'ddd MMM dd h a') }</span></div>
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
        var tmpEvents = [
            { "title":"Panda's Play House II: A Trippy Affair", "location":"MilkBoy ART HOUSE - 7416 Baltimore Ave., College Park, MD.", "date": "2019-12-01 21:00:00", "img":tmpImg, links:[{title:"Purchase tickets here", link:"https://www.ticketfly.com/event/1598104-pandas-playhouse-ii-live-college-park/"}] },
            { "title":"Basement Tuesdays", "location":"Pure Lounge - 1326 U Street, NW, DC", "date": "2019-11-28 19:00:00", "img":null, links:[]},
            { "title":"DanksGiving", "location":"HollyWood Hemp Museum - 6140 Hollywood Blvd., Los Angeles, CA.", "date": "2019-11-24 22:00:00", "img":null, links:[]},
            { "title":"Basement Tuesdays", "location":"Pure Lounge - 1326 U Street, NW, DC", "date": "2019-08-29 19:00:00", "img":null, links:[]},
            { "title":"Basement Tuesdays", "location":"Pure Lounge - 1326 U Street, NW, DC", "date": "2019-07-25 19:00:00", "img":null, links:[]},
            { "title":"Midnight Flow 2", "location":"8241 Georgia Ave., Silver Spring, Md. 20910", "date": "2019-11-02 21:00:00", "img":null, links:[]},
            { "title":"SXSW Performance", "location":"South by Southwest Festival: Austin, Tx", "date": "2019-03-17 10:00:00", "img":null, links:[]},
            { "title":"Hiphopyogalive performance", "location":"Washington Dc-Amsterdam Lounge", "date":"2019-12-02 22:00:00", "img":null, links:[]}
        ];

        try {
            var orderedEvents = tmpEvents.sort(function(a,b){  return new Date(a.date) - new Date(b.date);  });

            this.setState({events: orderedEvents});
        }
        catch(ex){

        }
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

    componentWillMount(){
        //let self = this;        
        this.loadEvents();
    }
}

export default Shows;
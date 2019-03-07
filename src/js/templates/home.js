import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/* Components */
import Footer from './footer';
import CarouselCover from './components/carouselCover';
import CarouselEvent from './components/carouselEvent';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner.jpg';

import eventImg from '../../assets/img/panda1.jpeg';
import musicImg from '../../assets/img/CMOG.jpeg';

class Home extends Component{
    constructor(props) {
        super(props);

        this.state = {
            scrollSpy: true,
            scrollSmooth: true,
            scrollDuration: 7000,            
            showThumbs: false,
            carouselData: [
                { img:backgroundImg, class:"cover", content:"Gandhi3x"},                   
                { class:"event", content:{ "title":"Panda's Play House II: A Trippy Affair", "location":"MilkBoy ART HOUSE - 7416 Baltimore Ave., College Park, MD.", "date": "2019-12-01 21:00:00", "img":eventImg, links:[{title:"Purchase tickets here", link:"https://www.ticketfly.com/event/1598104-pandas-playhouse-ii-live-college-park/"}] } },
                { class:"event", content:{ "title":"SXSW Performance", "location":"South by Southwest Festival: Austin, Tx", "date": "2019-03-17 10:00:00", "img":null, links:[]}},
                { class:"event", content:{ "title":"Hiphopyogalive performance", "location":"Washington Dc-Amsterdam Lounge", "date":"2019-12-02 22:00:00", "img":null, links:[]}}

            ]
        }

        this.renderSwitch = this.renderSwitch.bind(this);
    }

    renderSwitch(item) {
        switch(item.class) {
          case 'cover':
            return <CarouselCover item={item}/>;
          case 'event':
            return <CarouselEvent item={item}/>;
          default:
            return <div>NA</div>;
        }
    }

    render(){        
        return(
            <div className="page-body">
                <div className="background-container"><img className="background-img" src={backgroundImg}></img></div>
                <div className="content-container">
                    { /* Body */}
                    <div className="body-container home">
                        <Carousel className="main-carousel" showThumbs={this.state.showThumbs} showStatus={false} interval={this.state.scrollDuration} infiniteLoop autoPlay>
                            {this.state.carouselData.map((item, i) => 
                                <div className="slide-container" key={i}>
                                    {this.renderSwitch(item) }
                                </div>
                            )}
                        </Carousel>
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

export default Home;
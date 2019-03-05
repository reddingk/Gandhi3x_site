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
                { img:eventImg, class:"event", content:{title:"Panda's Play House II: A Trippy Affair", text:"Come checkout Gandhi Ali at MilkBoy Arthouse out in College Park, MD. 12/1", date:'December 01, 2018 20:00:00', links:[{title:"Purchase tickets here", link:"https://www.ticketfly.com/event/1598104-pandas-playhouse-ii-live-college-park/"}]}}
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
                    <div className="body-container">
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
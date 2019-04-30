import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

/* Components */
import Footer from './footer';
import CarouselCover from './components/carouselCover';
import CarouselEvent from './components/carouselEvent';
import CarouselSong from './components/carouselSong';
import CarouselVideo from './components/carouselVideo';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner5.jpg';

import eventImg from '../../assets/img/panda1.jpeg';
import musicImg from '../../assets/img/CMOG.jpg';

var carouselBase = [{ img:backgroundImg, class:"cover", content:"Gandhi3x"}];

class Home extends Component{
    constructor(props) {
        super(props);

        this.rootPath = "";
        this.state = {
            scrollSpy: true,
            scrollSmooth: true,
            scrollDuration: 7000,            
            showThumbs: false,
            carouselData: []
        }

        this.renderSwitch = this.renderSwitch.bind(this);
    }

    renderSwitch(item) {
        switch(item.class) {
          case 'cover':
            return <CarouselCover item={item}/>;
          case 'event':
            return <CarouselEvent item={item}/>;
          case 'album':
            return <CarouselSong item={item} />;
          case 'song':
            return <CarouselSong item={item} />;
          case 'video':
            return <CarouselVideo item={item} />;
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

    loadLatestData(){
        var self = this;
        try {
            fetch(self.rootPath + "/api/getLatest")
            .then(function(response) {
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                var carouselList = carouselBase.concat(data.results);
                self.setState({ carouselData: carouselList});
            }); 
        }
        catch(ex){
            console.log("Error Loading Latest Data: ", ex);
        }
    }

    componentDidMount(){         
        this.loadLatestData();
    }
}

export default Home;
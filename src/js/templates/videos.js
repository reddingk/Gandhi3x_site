import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

/* Components */
import Footer from './footer';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner4.jpg';

const carouselOptions = {
    duration:400,
    autoPlayInterval:7000,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
    },
    responsiveSingle: {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
    }
};

class Videos extends Component{
    constructor(props) {
        super(props);

        this.state = {
            videos: [
                {"title":"Icey", "date":"2018-02-09","urlcode":"_DY9LEO2BA0","text":"Gandhi Ali Icey"},
                {"title":"Ready", "date":"2018-01-11","urlcode":"cVl3G12ry2s","text":"Gandhi Ali Ready"},
                {"title":"Bet It", "date":"2018-01-07","urlcode":"_CtbzItbu7Y","text":"Gandhi Ali Bet It"},
                {"title":"Never Mind Em","date":"2017-06-18","urlcode":"5WkiBOylzC0","text":"Gandhi Ali Never Mind Em"},                
                {"title":"Five", "date":"2016-09-15","urlcode":"8YyLoJkPYRI","text":"Gandhi Ali Five"},
                {"title":"Jumpman", "date":"2015-12-12","urlcode":"bjMnCi8KEFg","text":"Jumpman"}
            ]
        }
    }

    buildVideos(){
        return(
            this.state.videos.map((video,i) => (
                <div key={i} className="album-container style-2">
                    <div className="album-info">
                        <div className="album-title">{video.title}</div>                                               
                    </div>
                    <div className="cover-container">                        
                        <iframe src={"https://www.youtube.com/embed/"+video.urlcode} frameborder="0" height="300px" allowtransparency='true'/>                        
                    </div>
                </div>
            ))
        )
    }

    render(){    
        const videos = this.buildVideos();

        return(
            <div className="page-body">
                <div className="background-container"><img className="background-img" src={backgroundImg}></img></div>
                <div className="content-container">
                    { /* Body */}
                    <div className="body-container page videos">
                        <h1>Videos</h1>
                        <div className="videos-container">
                            <div className="list-container single">                                    
                                <span className="ctrl-container">
                                    <span className="ctrl prev" onClick={() => this.Carousel._slidePrev()}><i className="fas fa-chevron-left"></i></span>
                                    <span className="ctrl next" onClick={() => this.Carousel._slideNext()}><i className="fas fa-chevron-right"></i></span>
                                </span>
                                <AliceCarousel className="videos-carousel" items={videos}
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

    componentDidMount(){
        //let self = this;        
    }
}

export default Videos;
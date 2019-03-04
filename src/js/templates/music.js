import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

/* Components */
import Footer from './footer';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner2.png';
import defaultImg from '../../assets/img/CMOG.jpeg';
import tmpCover from '../../assets/img/CMOG.jpeg';

const carouselOptions = {
    scrollSpy: true,
    scrollSmooth: true,
    scrollDuration: 5500,
    responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1024: { items: 3 },
    }
};

class Music extends Component{
    constructor(props) {
        super(props);

        this.state = {
            titleSearch:"",
            displayMusic:{
                albums:[],
                mixtapes:[],
                songs:[]
            },
            music:{
                albums:[
                    {"title":"C.M.O.G.", "additionalInfo":"", "date":"2018-11-20", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":tmpCover},
                    {"title":"Trap blues", "additionalInfo":"Beats by Drty Wahol", "date":"2019-01-20", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":tmpCover},
                    {"title":"Never Mind Em", "additionalInfo":"", "date":"2018-09-25", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":tmpCover},
                    {"title":"That Way", "additionalInfo":"", "date":"2018-07-10", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":tmpCover}
                ],
                mixtapes:[
                    {"title":"Dirty Work", "additionalInfo":"Drty Work by Gandhi Ali", "date":"2016-07-12", "url":"https://spinrilla.com/mixtapes/gandhi-ali-dirty-work/embed", "img":""},
                    {"title":"Radio Remix Vol 1", "additionalInfo":"Radio Remix Vol 1. by Gandhi Ali", "date":"2016-04-13", "url":"https://spinrilla.com/mixtapes/gandhi-ali_dmv-radio-remix-vol-1-jackin-beats-by-gandhi-ali/embed", "img":""}
                ],
                songs:[
                    {"title":"Trap blues", "additionalInfo":"", "date":"2017-11-20", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"That Way", "additionalInfo":"", "date":"2017-08-18", "links":[{"type":"itunes", "url":"https://itunes.apple.com/us/album/that-way-feat-sleep/id1276026221?i=1276026223"}], "img":""},
                    {"title":"Test Song 1", "additionalInfo":"", "date":"2017-08-18", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 2", "additionalInfo":"", "date":"2017-07-18", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 3", "additionalInfo":"", "date":"2017-06-18", "links":[{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 4", "additionalInfo":"", "date":"2017-05-28", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 5", "additionalInfo":"", "date":"2017-05-10", "links":[{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 6", "additionalInfo":"", "date":"2017-05-01", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 7", "additionalInfo":"beats by test", "date":"2017-08-19", "links":[{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 8", "additionalInfo":"ft. T. est", "date":"2017-04-13", "links":[{"type":"spinrilla", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 9", "additionalInfo":"ft. 1test", "date":"2017-05-15", "links":[{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 10", "additionalInfo":"", "date":"2017-02-19", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                    {"title":"Test Song 11", "additionalInfo":"", "date":"2017-01-28", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""}
                ],
            }
        }
    }

    buildAlbums(){
        return(
            this.state.music.albums.map((album,i) => (
                <div key={i} className="album-conatainer">
                    <div className="cover-container">                        
                        <img src={(album.img ? album.img : defaultImg)}/>                           
                    </div>
                    <div className="album-info">
                        <div className="album-title">{album.title}</div>
                        <div className="album-additional">{album.additionalInfo}</div>                        
                    </div>
                </div>
            ))
        )
    }

    buildMixtapes(){
        return(
            this.state.music.mixtapes.map((mixtape,i) => (
                <div key={i} className="mixtape-conatainer">
                    <iframe src={mixtape.url} />
                </div>
            ))
        )
    }
   

    render(){   
        const albums = this.buildAlbums();
        const mixtapes = this.buildMixtapes();

        return(
            <div className="page-body">
                <div className="background-container"><img className="background-img" src={backgroundImg}></img></div>
                <div className="content-container">                    
                    <div className="body-container page music">
                        <h1>Music</h1>
                        <div className="music-container">
                            <div className="music-row album">
                                <div className="list-container">
                                    <span className="ctrl prev" onClick={() => this.Carousel._slidePrev()}><i className="fas fa-chevron-left"></i></span>
                                    <span className="ctrl next" onClick={() => this.Carousel._slideNext()}><i className="fas fa-chevron-right"></i></span>
                                    <AliceCarousel className="album-carousel" items={albums}
                                        duration={400} mouseDragEnabled={true} autoPlay={true}
                                        autoPlayInterval={7000} autoPlayDirection="ltr" responsive={this.state.responsive}
                                        disableAutoPlayOnAction={true} buttonsDisabled={true} ref={ el => this.Carousel = el }/>
                                </div>
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

export default Music;
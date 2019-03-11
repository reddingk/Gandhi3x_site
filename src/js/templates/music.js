import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

/* Components */
import Footer from './footer';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner2.png';
import defaultImg from '../../assets/img/DefaultImg.PNG';
import defaultImgAlt from '../../assets/img/DefaultImgW.PNG';
import tmpCover from '../../assets/img/CMOG.jpg';

const carouselOptions = {
    duration:400,
    autoPlayInterval:7000,
    responsive: {
        0: { items: 1 },
        600: { items: 3 },
        1024: { items: 5 },
    },
    responsiveSingle: {
        0: { items: 1 },
        600: { items: 1 },
        1024: { items: 1 },
    }
};

class Music extends Component{
    constructor(props) {
        super(props);

        this.rootPath = "";
        this.state = {           
            albums:[
                {"title":"C.M.O.G.", "additionalInfo":"", "date":"2018-11-20", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":tmpCover},
                {"title":"Trap blues", "additionalInfo":"Beats by Drty Wahol", "date":"2019-01-20", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":null},
                {"title":"Never Mind Em", "additionalInfo":"", "date":"2018-09-25", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":tmpCover},
                {"title":"That Way", "additionalInfo":"", "date":"2018-07-10", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":null},
                {"title":"That Way 2", "additionalInfo":"", "date":"2018-07-10", "links":[{"type":"itunes", "url":""},{"type":"soundcloud", "url":""}], "img":tmpCover}
            ],
            mixtapes:[
                {"title":"Dirty Work", "additionalInfo":"Drty Work by Gandhi Ali", "date":"2016-07-12", "url":"https://spinrilla.com/mixtapes/gandhi-ali-dirty-work/embed"},
                {"title":"Radio Remix Vol 1", "additionalInfo":"Radio Remix Vol 1. by Gandhi Ali", "date":"2016-04-13", "url":"https://spinrilla.com/mixtapes/gandhi-ali_dmv-radio-remix-vol-1-jackin-beats-by-gandhi-ali/embed"}
            ],
            songs:[
                {"title":"Trap blues", "additionalInfo":"", "date":"2017-11-20", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                {"title":"That Way", "additionalInfo":"", "date":"2017-08-18", "links":[{"type":"itunes", "url":"https://itunes.apple.com/us/album/that-way-feat-sleep/id1276026221?i=1276026223"}], "img":""},
                {"title":"Test Song 1", "additionalInfo":"", "date":"2017-08-18", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                {"title":"Test Song 2", "additionalInfo":"", "date":"2017-07-18", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                {"title":"Test Song 7", "additionalInfo":"beats by test", "date":"2017-08-19", "links":[{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                {"title":"Test Song 8", "additionalInfo":"ft. T. est", "date":"2017-04-13", "links":[{"type":"spinrilla", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                {"title":"Test Song 9", "additionalInfo":"ft. 1test", "date":"2017-05-15", "links":[{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                {"title":"Test Song 10", "additionalInfo":"", "date":"2017-02-19", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"itunes", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"},{"type":"other", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""},
                {"title":"Test Song 11", "additionalInfo":"", "date":"2017-01-28", "links":[{"type":"soundcloud", "url":"https://soundcloud.com/gandhi3x/sets/trapblues"}], "img":""}
            ]            
        }

        this.albumCarousel = null;
        this.mixtapeCarousel = null;

        this.getLinkIcon = this.getLinkIcon.bind(this);
    }

    buildAlbums(){
        return(
            this.state.albums.map((album,i) => (
                <div key={i} className="album-container">
                    <div className="album-info">
                        <div className="album-title">{album.title}</div>
                        <div className="album-additional">{album.additionalInfo}</div>                        
                    </div>
                    <div className="cover-container">                        
                        <img src={(album.img && album.img !== "" ? album.img : defaultImgAlt)}/>                           
                    </div>
                </div>
            ))
        )
    }

    buildMixtapes(){
        return(
            this.state.mixtapes.map((mixtape,i) => (
                <div key={i} className="mixtape-container">
                    <iframe src={mixtape.url} frameborder="0" height="450px" allowtransparency='true'/>
                </div>
            ))
        )
    }
    
    getLinkIcon(link, key){
        switch(link.type){
            case "itunes":
                return <a href={link.url} target="_blank" key={key} className="link-icon itunes"><i className="fab fa-apple"></i></a>
            case "soundcloud":
                return <a href={link.url} target="_blank" key={key} className="link-icon soundcloud"><i className="fab fa-soundcloud"></i></a>
            case "spinrilla":
                return <a href={link.url} target="_blank" key={key} className="link-icon spinrilla"><i className="fas fa-compact-disc"></i></a>
            default:
                return <a href={link.url} target="_blank" key={key} className="link-icon other"><i className="fas fa-music"></i></a>
        }
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
                        <div className="music-container scroll-style">
                            <h2 className="sub-title">Albums</h2>   
                            <div className="music-row album">
                                <div className="list-container">                                    
                                    <AliceCarousel className="album-carousel" items={albums}
                                        duration={carouselOptions.duration} mouseDragEnabled={true} responsive={carouselOptions.responsive}
                                        buttonsDisabled={true} dotsDisabled={true} ref={ el => this.albumCarousel = el }/>
                                    <span className="ctrl-container">
                                        <span className="ctrl prev" onClick={() => this.albumCarousel._slidePrev()}><i className="fas fa-chevron-left"></i></span>
                                        <span className="ctrl next" onClick={() => this.albumCarousel._slideNext()}><i className="fas fa-chevron-right"></i></span>
                                    </span>
                                </div>
                            </div>

                            <div className="music-row split">
                                <div className="split-section sz-6">
                                    <h2 className="sub-title lrg-gap">Tracks</h2>
                                    <div className="track-list">
                                        {this.state.songs.map((song,i) => (
                                            <div key={i} className="track-item">
                                                <div className="song-icon">                                                    
                                                    <img src={(song.img && song.img !== "" ? song.img : defaultImg)}/>
                                                </div>
                                                <div className="song-title">{song.title}</div>
                                                <div className="song-links-container">
                                                    {song.links.map((link,j) => (
                                                        this.getLinkIcon(link,j)
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                
                                <div className="split-section sz-4">
                                    <h2 className="sub-title">Mixtapes</h2>
                                    <div className="list-container single">
                                        <span className="ctrl-container">
                                            <span className="ctrl prev" onClick={() => this.mixtapeCarousel._slidePrev()}><i className="fas fa-chevron-left"></i></span>
                                            <span className="ctrl next" onClick={() => this.mixtapeCarousel._slideNext()}><i className="fas fa-chevron-right"></i></span>
                                        </span>
                                        <AliceCarousel className="album-carousel" items={mixtapes}
                                            duration={carouselOptions.duration} mouseDragEnabled={true} responsive={carouselOptions.responsiveSingle}
                                            buttonsDisabled={true} dotsDisabled={true} ref={ el => this.mixtapeCarousel = el }/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>    
        );        
    }

    loadSongsData(){
        var self = this;
        try {
            fetch(self.rootPath + "/api/getSongs")
            .then(function(response) {
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                self.setState({ songs: data.results});
            }); 
        }
        catch(ex){
            console.log("Error Loading Latest Data: ", ex);
        }
    }

    loadAlbumsData(){
        var self = this;
        try {
            fetch(self.rootPath + "/api/getAlbums")
            .then(function(response) {
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                self.setState({ albums: data.results});
            }); 
        }
        catch(ex){
            console.log("Error Loading Latest Data: ", ex);
        }
    }

    loadMixtapesData(){
        var self = this;
        try {
            fetch(self.rootPath + "/api/getMixtapes")
            .then(function(response) {
                if (response.status >= 400) {
                  throw new Error("Bad response from server");
                }
                return response.json();
            })
            .then(function(data) {
                self.setState({ mixtapes: data.results});
            }); 
        }
        catch(ex){
            console.log("Error Loading Latest Data: ", ex);
        }
    }

    componentDidMount(){
        //this.loadMixtapesData();
        //this.loadAlbumsData();
        //this.loadSongsData();    
    }
}

export default Music;
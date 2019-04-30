import React, { Component } from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

/* Components */
import Footer from './footer';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner6.jpg';
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

        this.rootPath = "http://localhost:8004";
        this.state = {           
            albums:[],
            mixtapes:[],
            songs:[]            
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
        this.loadMixtapesData();
        this.loadAlbumsData();
        this.loadSongsData();    
    }
}

export default Music;
import React, { Component } from 'react';

/* Components */
import Footer from './footer';

/* Images */
import backgroundImg from '../../assets/img/GandhiAli-banner3.png';

class ImgGallery extends Component{
    constructor(props) {
        super(props);

        this.state = {
            initList:{}
        }
    }

   importAll(r){
        return r.keys().map(r);
   }  
    
    render(){        
        return(
            <div className="page-body">
                <div className="background-container"><img className="background-img" src={backgroundImg}></img></div>
                <div className="content-container">
                    { /* Body */}
                    <div className="body-container page gallery">
                        <h1>Gallery</h1>
                        <div className="gallery-container scroll-style">
                            {Object.keys(this.state.initList).map((image,i) => (
                                <div  key={i} className="img-container"><img src={this.state.initList[image]}/></div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>    
        );        
    }

    componentWillMount(){
        var images = this.importAll(require.context('../../assets/img/gallery',false,/\.(png|jpe?g|svg)$/));      
        this.setState({ initList: images });
    }
}

export default ImgGallery;
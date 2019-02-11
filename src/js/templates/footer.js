import React, { Component } from 'react';

class Footer extends Component{
    constructor(props) {
        super(props);

        this.state = {}
    } 

    render(){        
        return(
            <div className="footer-container">
                <div class="footer-section contact-pills">
                    <a href="https://www.instagram.com/gandhi3x/" target="_blank" className="footer-pill instagram">
                        <i class="fab fa-instagram"></i><span>Instagram</span>
                    </a>

                    <a href="https://twitter.com/gandhi3x" target="_blank" className="footer-pill twitter">
                        <i class="fab fa-twitter"></i><span>Twitter</span>
                    </a>

                    <a href="https://soundcloud.com/gandhi3x" target="_blank" className="footer-pill soundcloud">
                        <i class="fab fa-soundcloud"></i><span>Soundcloud</span>
                    </a>

                    <a href="https://open.spotify.com/artist/0zMOUBNL8MR0eTOGUgUFA6" target="_blank" className="footer-pill spotify">
                        <i class="fab fa-spotify"></i><span>Spotify</span>
                    </a>
                </div>

                <div className="footer-section copyright">MIND CONTROL EMPIRE © COPYRIGHT 2019</div>
            </div>    
        );        
    }

    componentDidMount(){
        //let self = this;        
    }
}

export default Footer;
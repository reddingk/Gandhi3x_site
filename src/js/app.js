//https://reacttraining.com/react-router/web/example/route-config
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* Components */
import Home from './templates/home';
import Music from './templates/music';
import Videos from './templates/videos';
import Shows from './templates/shows';
import Gallery from './templates/gallery';

/* Styles */
import "../css/app.less";

const routes = [
    { path:"/music", component:Music, img:null},
    { path:"/videos", component:Videos, img:null },
    { path:"/shows", component:Shows, img: null },
    { path:"/gallery", component:Gallery, img:null }    
];

const SiteRoutes = route => (
    <Route path={route.path} render={props => ( <route.component {...props} />)} />
);

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){     
        return(
           <Router>
                <div className="app-body">
                    { /* HEADER */}
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <Link className="navbar-brand navbar-brand-centered" to="/">Gandhi3x</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav nav-left">
                                <Link className="nav-item nav-link" to="/music">Music</Link>
                                <Link className="nav-item nav-link" to="/videos">Videos</Link>
                            </div>

                            <div className="navbar-nav ml-auto nav-right">
                                <Link className="nav-item nav-link" to="/shows">Shows</Link>
                                <Link className="nav-item nav-link" to="/gallery">Gallery</Link>
                            </div>
                        </div>
                    </nav>

                    <Route exact path="/" component={Home} />
                    { routes.map((route, i) => <SiteRoutes key={i} {...route} />) }        
                </div>
           </Router>
        );
     }
  
     componentDidMount(){}
}

export default App;
import React, { Component} from 'react';

import Navbar from './Navbar'

import './Home.css';


class Home extends Component {
    constructor (props) {
        super(props);
        
    }



  

    render() {
        return (
            <div className="col-md-6">
                <div> <Navbar /></div>
                <h1>Entrada de publicaciones</h1>
                <div className="publicationsContainer">  </div>
                <div className="footerContainer"></div>

            </div>
        )
    }
}


export default Home;

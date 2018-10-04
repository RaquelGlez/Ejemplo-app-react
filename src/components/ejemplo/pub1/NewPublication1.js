import React, { Component} from 'react';
import './Home.css';

class NewPublication extends Component {
    constructor (props) {
        super(props);
    }



    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="¿Qué tienes en tu refri?" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <div className="input-group-append">
                    <button className="btn btn-secondary" type="button" id="button-addon2">Publicar</button>
                </div>
            </div>
        )
        
    }


}

export default NewPublication;
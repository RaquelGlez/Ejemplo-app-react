import React, { Component} from 'react';
import './Home.css';


class Publication extends Component {
    constructor (props) {
        super(props);
        console.log(props)
        // this.noteContent = props.noteContent;
        // this.noteId = props.noteId;
    }



    render() {
        return (
            <div className="publication">
                <span onClick={this.handleRemove}>&times;</span>  
                <p>{this.props.noteContent}</p>

            </div>
        )
    }

    // min 28 se ve el principio de remover nota
}

export default Publication;
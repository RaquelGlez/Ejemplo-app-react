import React, { Component} from 'react';
import './Home.css';

import firebase from 'firebase'
import credentials from '../../../configuration/firebase'

import NewPublication from './NewPublication1';
import Publication from './publication1';
const db = firebase.database();



class Publications1 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            notes: [
                // {noteId: 1, noteContent:'note 1'},
                // {noteId: 2, noteContent:'note 2'}
            ]
        };
        
        this.db = this.app.database().ref().child('publications')
        
    }

    componentDidMount(){
        const { publications } = this.state;
        this.db.on('chill_added', snap => {
            publications.push({
                noteId = snap.key,
                noteContent: snap.val().noteContent
            })
            this.setState({publications})
        })
    }

    removePublication(){

    }

    addPublication(publication){
        this.db.push().set({noteContent:publication});
    }

  

    render() {
        return (
            <div className="container">
                <div>
                    <h3>You are home</h3>
                </div>
                <div>
                    <NewPublication />
                </div>
                <div className="publicationBody">
                    <ul>
                    {
                        this.state.notes.map(note => {
                            return (
                                <Publication 
                                    noteContent = {note.noteContent}   // de esta manera pasamos las propiedades al componente hijo
                                    noteId = {note.noteId}
                                    key = {note.noteId}
                                />
                            )
                        })
                    }
                    </ul>
                </div>

            </div>
        )
    }
}


export default Publications1;
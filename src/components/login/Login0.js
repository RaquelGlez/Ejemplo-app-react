// Dependencias
import React, { Component} from 'react';
//import firebase from 'firebase'
import credentials from '../../configuration/firebase'
import Login1 from './Login1.js';
import Login2 from './Login2.js';
import Login from './Login.js';
import Home from '../home/Home';
import {Button, FormGroup, Label, Input} from 'reactstrap';

// Assets
import './Login.css';
import logo from '../../images/mi-sazon.png'

class Login0 extends Component {
    constructor (props) {
        super(props);
        this.state = {
            user:{},
        }
        this.authListener = this.authListener.bind(this)
    }

    componentDidMount(){
        this.authListener();
    }

    authListener () {
        credentials.auth().onAuthStateChanged((user) => {
            // console.log(user);
          if (user) {
            console.log('existe usuario activo');
            // User is signed in.
            this.setState({ user });
          } else {
            console.log('no existe usuario activo');
          // User is signed out.
          this.setState({ user:null });
          }
        });
      };



    render() {
        return (
            <div>
                {this.state.user ? (<Home />) : (<Login/>)}
            </div>
            // <main className="container">
            //     <section className="col-sm">
            //         <img className="form-logo" src={logo} alt="Mi-Sazón"></img>
            //     </section>
            //     <section className="row"> <Login1 /></section>
            //     <section className="row"> <Login2 /></section>
            //     <section className="">
            //         <FormGroup>
            //             <Label for="exampleEmail">Email</Label>
            //             <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            //         </FormGroup>
            //         <FormGroup>
            //             <Label for="examplePassword">Password</Label>
            //             <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            //         </FormGroup>
            //     </section>
            // </main>
        );
    }
}


export default Login0;

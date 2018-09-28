// Dependencias
import React, { Component} from 'react';
import firebase from 'firebase'
import credentials from '../../configuration/firebase'
import {Button, FormGroup, Label, Input} from 'reactstrap';

// Assets
//import './Login.css';
import logo from '../../images/mi-sazon.png'

class Login extends Component {
    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }


    login(e) {
        e.preventDefault();
        credentials.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function() {
        }).catch((error)=>{
        // Mensaje en consola si existe error de inicio de sesion
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

    signup(e) {
        e.preventDefault();
        credentials.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(function() {
        }).catch((error)=>{
        // Mensaje en consola si existe error de inicio de sesion
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    }

        handleChange(e){
        this.setState({ [e.target.name]: e.target.value});
    }


    render() {
        return (
            <main className="container">
                <section className="col-sm">
                    <img className="form-logo" src={logo} alt="Mi-Sazón"></img>
                </section>
                <section className="">
                    <FormGroup>
                        <Label for="exampleEmail">Email</Label>
                        <Input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input value={this.state.password} onChange={this.handleChange} type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                    </FormGroup>
                </section>
                <Button type="submit" onClick={this.login} className="btn ">Login</Button>
                <Button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</Button>
            </main>
            
        );
    }
}


export default Login;

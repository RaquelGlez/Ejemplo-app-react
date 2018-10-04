// Dependencias
import React, { Component} from 'react';
//import firebase from 'firebase'
import credentials from '../../configuration/firebase'
import {Button, FormGroup, Label, Input} from 'reactstrap';


// Assets
import './Login.css';
import logo from '../../images/mi-sazon.png'

class Login extends Component {
    constructor (props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        //this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: '',
            name: '',
            lastName: ''
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
                <div className="contenedor">
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
                    <Button data-toggle="modal" data-target="#exampleModal" style={{marginLeft: '25px'}} className="btn btn-success">Registar</Button>
                    {/* <Button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</Button> */}
                </div>

                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro de nuevo usuario</h5>
                                <Button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </Button>
                        </div>
                        <div className="modal-body">
                            <section className="form-group">
                                <Label className="form-label" for="name" value={this.state.name} onChange={this.handleChange}>Nombre</Label>
                                <Input type="name" className="form-control form-input" id="name" placeholder="Ingresa tu Nombre"/>
                            </section>
                            <section className="form-group">
                                <Label className="form-label" for="last_name" value={this.state.lastName} onChange={this.handleChange}>Apellido</Label>
                                <Input type="last_name" className="form-control form-input" id="last_name" placeholder="Ingresa tu Apellido" />
                            </section>
                            <section className="form-group">
                                <Label className="form-label" for="email" value={this.state.email} onChange={this.handleChange}>Correo electrónico</Label>
                                <Input type="email" className="form-control form-input" id="email_register" placeholder="usuario@example.com"/>
                            </section>
                            <section className="form-group">
                                <Label className="form-label" for="password" value={this.state.password} onChange={this.handleChange}>Contraseña</Label>
                                <Input type="password" className="form-control form-input" id="password_register" />
                            </section>
                        </div>
                        <div className="modal-footer">
                            <Button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</Button>
                            <Button onClick={this.signup} id="register" type="button" style={{marginLeft: '25px'}} className="btn btn-success">Registrarse</Button>
                        </div>
                    </div>
                </div>
            </div>     
            </main>
            
            
        );
    }
}


export default Login;

import React, { Component} from 'react';
import credentials from '../../configuration/firebase'

// Assets
import './Login.css';

class RegisterUs extends Component {
    constructor (props) {
        super(props);
        this.signup = this.signup.bind(this);
        this.state = {
            name: '',
            lastName: '',
            email: '',
            password: ''
        }
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




    render(){
        return(
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Registro de nuevo usuario</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                        <div className="modal-body">
                            <section className="form-group">
                                <label className="form-label" for="name" value={this.state.name} onChange={this.handleChange}>Nombre</label>
                                <input type="name" className="form-control form-input" id="name" placeholder="Ingresa tu Nombre"/>
                            </section>
                            <section className="form-group">
                                <label className="form-label" for="last_name" value={this.state.lastName} onChange={this.handleChange}>Apellido</label>
                                <input type="last_name" className="form-control form-input" id="last_name" placeholder="Ingresa tu Apellido" />
                            </section>
                            <section className="form-group">
                                <label className="form-label" for="email" value={this.state.email} onChange={this.handleChange}>Correo electrónico</label>
                                <input type="email" className="form-control form-input" id="email_register" placeholder="usuario@example.com"/>
                            </section>
                            <section className="form-group">
                                <label className="form-label" for="password" value={this.state.password} onChange={this.handleChange}>Contraseña</label>
                                <input type="password" className="form-control form-input" id="password_register" />
                            </section>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                            <button onClick={this.signup} id="register" type="button" style={{marginLeft: '25px'}} className="btn btn-success">Registrarse</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
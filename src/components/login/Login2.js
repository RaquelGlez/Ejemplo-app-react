// Dependencias
import React, { Component} from 'react';
import firebase from 'firebase'
// import credentials from '../../configuration/firebase'

// Assets
import './Login.css';
import {Button} from 'reactstrap';

class Login2 extends Component {
  constructor () {
    super();
    this.state = {
      user: null
    }; 

    this.handleAuth = this.handleAuth.bind(this);
    this.loginUsuario = this.loginUsuario.bind(this);
  }

  handleAuth () {
    const provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result => console.log(`${result.user.email} ha iniciado sesión`))
    .catch(error => console.log(`Error ${error.code}: ${error.message}`))
  }

  loginUsuario () {
    // si el usuario esta logueado
    if (this.state.user){
      return (
        <div>
          <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName}></img>
          <p>Hola {this.state.user.displayName}!</p>
        </div>
      )
    } else {
    // Si no lo esta
      return(
        <div className="btn btn-primary btn-block form-button mb-3">
          <Button color="primary" onClick={this.handleAuth}>Iniciar con Facebook</Button>
        </div>
      
      );
    }
  }


render() {
  return (
    <div className="container">
      <section className="login-facebook">{ this.loginUsuario() }</section>
    </div>
  );
  }
}


export default Login2;
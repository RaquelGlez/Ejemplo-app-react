import React, { Component } from 'react';
// import firebase from 'firebase'
// import logo from './logo.svg';
// import credentials from './configuration/firebase'
//import Login0 from './components/login/Login0.js';
import Login from './components/login/Login.js';
// import Login2 from './components/login/Login2.js';
import './App.css';

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <div className="contenedor">
          {/* <section className="row"><Login0 /></section> */}
          <section className="row"><Login /></section>
        </div>
      </div>
    );
  }
}

export default App;

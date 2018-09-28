import React from 'react';
import ReactDOM from 'react-dom';
// import firebase from 'firebase'
import './index.css';
import App from './App';
import Login0 from './components/login/Login0'
import registerServiceWorker from './registerServiceWorker';
// import import credentials from './configuration/firebase';
// import 'bootstrap/dist/css/bootstrap.min.css';

// firebase.initializeApp({
//     apiKey: "AIzaSyAvti1REJYSTMvutsT3OaaFjN_y61I0sdw",
//     authDomain: "red-social-react-3a3de.firebaseapp.com",
//     databaseURL: "https://red-social-react-3a3de.firebaseio.com",
//     projectId: "red-social-react-3a3de",
//     storageBucket: "red-social-react-3a3de.appspot.com",
//     messagingSenderId: "603868093948"
// })

ReactDOM.render(<Login0 />, document.getElementById('root'));
registerServiceWorker();

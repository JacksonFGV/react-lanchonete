import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDtwJwBn3y5c0Al84Cq6YmAlPn0izf5ATM",
    authDomain: "react-lanchonete.firebaseapp.com",
    databaseURL: "https://react-lanchonete.firebaseio.com",
    projectId: "react-lanchonete",
    storageBucket: "react-lanchonete.appspot.com",
    messagingSenderId: "428606834898"
  };
 
 const fire = firebase.initializeApp(config);
 export default fire;

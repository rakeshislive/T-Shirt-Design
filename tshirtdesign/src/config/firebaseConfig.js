import firebase from 'firebase/app';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyBOkUa3cIyfWgESidGqYmVlWdWXKKLnqDM",
    authDomain: "meme-7ec1f.firebaseapp.com",
    projectId: "meme-7ec1f",
    storageBucket: "meme-7ec1f.appspot.com",
    messagingSenderId: "413940332810",
    appId: "1:413940332810:web:5f7abfadf049e136a2e2f3",
    measurementId: "G-MPCMGPKWMH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

export {
      storage, firebase as default
  }
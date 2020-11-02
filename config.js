import * as firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyBq7tjn7FPf3e-4EPaDSwzZH-y7oVZiho8",
    authDomain: "wily-app-7758b.firebaseapp.com",
    databaseURL: "https://wily-app-7758b.firebaseio.com",
    projectId: "wily-app-7758b",
    storageBucket: "wily-app-7758b.appspot.com",
    messagingSenderId: "80033579492",
    appId: "1:80033579492:web:d31be49402925bf261c7f1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
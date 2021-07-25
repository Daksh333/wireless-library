import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyDTX6CVPmlPR2PC6bem5ZJgHn6WJRtUiWk",
    authDomain: "wireless-library-6cec1.firebaseapp.com",
    databaseURL: "https://wireless-library-6cec1-default-rtdb.firebaseio.com",
    projectId: "wireless-library-6cec1",
    storageBucket: "wireless-library-6cec1.appspot.com",
    messagingSenderId: "107484178832",
    appId: "1:107484178832:web:80c5008aaf7744ecc56b15",
    measurementId: "G-5NTX63HE3R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
export default firebase.firestore();
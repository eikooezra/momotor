import firebase from 'firebase' 
// import 'firebase/auth'
import 'firebase/database'

firebase.initializeApp({
    apiKey: "AIzaSyCV5wZfp8RkKOZ6B0TNAALP50wU4nN5-zE",
    authDomain: "momotorid-98c6c.firebaseapp.com",
    projectId: "momotorid-98c6c",
    storageBucket: "momotorid-98c6c.appspot.com",
    messagingSenderId: "53683180999",
    databaseURL: `https://momotorid-98c6c-default-rtdb.firebaseio.com/`,
    appId: "1:53683180999:web:c071090a0d81e4485135e2",
    measurementId: "G-NTV5T8DP2M"
  })

  const Fire = firebase;
  
  export default Fire;
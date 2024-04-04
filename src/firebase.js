import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDkVZIUIDRAIP6fXRK6QRwDQx1khQklMkU",
    authDomain: "challenge-b23d1.firebaseapp.com",
    databaseURL: "https://challenge-b23d1.firebaseio.com",
    projectId: "challenge-b23d1",
    storageBucket: "challenge-b23d1.appspot.com",
    messagingSenderId: "674440692182",
    appId: "1:674440692182:web:d84cda5e2689da5688e477",
    measurementId: "G-H1QPYYN2L5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};
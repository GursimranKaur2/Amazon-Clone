import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBZnrBFNStw6AuYYxCWgxGW8XBlguLWTLM",
    authDomain: "clone-16e33.firebaseapp.com",
    databaseURL: "https://clone-16e33.firebaseio.com",
    projectId: "clone-16e33",
    storageBucket: "clone-16e33.appspot.com",
    messagingSenderId: "237761200883",
    appId: "1:237761200883:web:a20ce402d5d40159882d86",
    measurementId: "G-G68MJDPVLY",
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
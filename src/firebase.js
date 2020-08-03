import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCbzeH62woFDHZElvYjY-7eRPeB-ZriHu8",
    authDomain: "tic-toc-clone-6836b.firebaseapp.com",
    databaseURL: "https://tic-toc-clone-6836b.firebaseio.com",
    projectId: "tic-toc-clone-6836b",
    storageBucket: "tic-toc-clone-6836b.appspot.com",
    messagingSenderId: "557633368329",
    appId: "1:557633368329:web:cb52a37df176baeb28a3d8",
    measurementId: "G-7D0NZ4BDWP"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCSQNLTo8KC3IaJyRZbOT5fXb4aqVkL0Ko",
  authDomain: "birdy-9d29b.firebaseapp.com",
  databaseURL: "https://birdy-9d29b-default-rtdb.firebaseio.com",
  projectId: "birdy-9d29b",
  storageBucket: "birdy-9d29b.appspot.com",
  messagingSenderId: "229075095531",
  appId: "1:229075095531:web:f66bc57ed9bc93a3d8d3ae",
  measurementId: "G-Q50MQ7F8P5"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default  db ;


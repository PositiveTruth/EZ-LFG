import firebase from 'firebase';

// go into firebase app, copy firebase config, and paste
var firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const db = app.database();
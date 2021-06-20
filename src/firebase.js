import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqlq-Ks6N9e_UQs5uW_HPvV29gvbwl-cQ",
  authDomain: "igalarm.firebaseapp.com",
  projectId: "igalarm",
  storageBucket: "igalarm.appspot.com",
  messagingSenderId: "178019821602",
  appId: "1:178019821602:web:cbafa4f601a819a19c027b",
  measurementId: "G-L1S8GZL9N8"
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export default fb;
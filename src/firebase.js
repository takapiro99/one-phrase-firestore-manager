import firebase from "firebase";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBryVtWN0nOoS5WvLztqaqz9H0_pIvNKmU",
  authDomain: "one-phrase.firebaseapp.com",
  projectId: "one-phrase",
  storageBucket: "one-phrase.appspot.com",
  messagingSenderId: "9364130202",
  appId: "1:9364130202:web:fae727b4b0f815bbed9223",
  measurementId: "G-S22RV8C1J0",
};

firebase.initializeApp(firebaseConfig);
console.log("development setting");

export const db = firebase.firestore();
export default firebase;

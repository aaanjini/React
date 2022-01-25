// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9iysMVUgxmXStosdoZ9U3mdsNISqvePc",
  authDomain: "react-assignment-942e5.firebaseapp.com",
  projectId: "react-assignment-942e5",
  storageBucket: "react-assignment-942e5.appspot.com",
  messagingSenderId: "363078857572",
  appId: "1:363078857572:web:d3666e8ea53707c1a18071",
  measurementId: "G-6FPWJHMSTM"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
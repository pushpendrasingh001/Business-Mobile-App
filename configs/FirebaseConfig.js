// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBCr9iScq2zYTgxWzb2kDtjRXsjLXfzMWs",
  authDomain: "business-listing-app-6e28e.firebaseapp.com",
  projectId: "business-listing-app-6e28e",
  storageBucket: "business-listing-app-6e28e.firebasestorage.app",
  messagingSenderId: "748608774215",
  appId: "1:748608774215:web:30783f7636d9d8e094d162",
  measurementId: "G-GWH5B61X09"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
//const analytics = getAnalytics(app);
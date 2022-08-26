// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9LAmnDOW86L6HwlIU8751_tEF6UMbTcI",
  authDomain: "mfh22-5e5b7.firebaseapp.com",
  projectId: "mfh22-5e5b7",
  storageBucket: "mfh22-5e5b7.appspot.com",
  messagingSenderId: "209385702922",
  appId: "1:209385702922:web:05146782c63a7496a741f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/init'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqmKdCmRbPv3_CKfaSmkBljsjowJtjCuE",
  authDomain: "genius-car-services-67da6.firebaseapp.com",
  projectId: "genius-car-services-67da6",
  storageBucket: "genius-car-services-67da6.appspot.com",
  messagingSenderId: "76138275575",
  appId: "1:76138275575:web:b92fa59d8e317c0fb969f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth
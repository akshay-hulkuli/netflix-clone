// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBEJRkRAm_FVnx3iTTbj2RtbhTwaUfv53A",
  authDomain: "netflixgpt-3b8e5.firebaseapp.com",
  projectId: "netflixgpt-3b8e5",
  storageBucket: "netflixgpt-3b8e5.appspot.com",
  messagingSenderId: "138308496003",
  appId: "1:138308496003:web:f0055bf6b9e6a2045349b6",
  measurementId: "G-1WCHD17W1H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
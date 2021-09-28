// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAWCm3HV2aCqQCfUt_30CaH2Xv37K93OVo",
  authDomain: "myportfolio-e7807.firebaseapp.com",
  projectId: "myportfolio-e7807",
  storageBucket: "myportfolio-e7807.appspot.com",
  messagingSenderId: "679554526696",
  appId: "1:679554526696:web:f046c7871019b9c5d3885d",
  measurementId: "G-8VV5WPGPM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(app);
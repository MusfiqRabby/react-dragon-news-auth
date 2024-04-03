// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDr0zDHEphMRivjAMVe4QdRnRS0eUV6WHU",
  authDomain: "react-dragon-news-auth-d8dce.firebaseapp.com",
  projectId: "react-dragon-news-auth-d8dce",
  storageBucket: "react-dragon-news-auth-d8dce.appspot.com",
  messagingSenderId: "617429506862",
  appId: "1:617429506862:web:78e55bf41fd6a32be4b8bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
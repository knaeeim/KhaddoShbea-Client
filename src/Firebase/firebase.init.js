// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_efCbLCkUf9lCCmDbr9Ou4kZekDUDDbE",
  authDomain: "assignment-11-e46ad.firebaseapp.com",
  projectId: "assignment-11-e46ad",
  storageBucket: "assignment-11-e46ad.firebasestorage.app",
  messagingSenderId: "910713917884",
  appId: "1:910713917884:web:7bb9908d10c4d964d15bb9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
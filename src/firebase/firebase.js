// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaRSH_Q4zx8KZx7x5QN5pqPwjdy3voEBE",
  authDomain: "unity-chain-6dfc4.firebaseapp.com",
  projectId: "unity-chain-6dfc4",
  storageBucket: "unity-chain-6dfc4.appspot.com",
  messagingSenderId: "553160601061",
  appId: "1:553160601061:web:6ab2d7dd790d94ae08d30c",
  measurementId: "G-LHYENQN4V5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

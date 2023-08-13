// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0sKPViXrIuhRTm_jA1TIrMMbvaY8UsEo",
  authDomain: "email-password-auth-79790.firebaseapp.com",
  projectId: "email-password-auth-79790",
  storageBucket: "email-password-auth-79790.appspot.com",
  messagingSenderId: "562724122364",
  appId: "1:562724122364:web:7fdb241ed30cb440143179"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgZCTZt86fr3QICeaIV1rd_sG9DNGL9DA",
  authDomain: "url-shortener-1f2cf.firebaseapp.com",
  projectId: "url-shortener-1f2cf",
  storageBucket: "url-shortener-1f2cf.appspot.com",
  messagingSenderId: "860864230604",
  appId: "1:860864230604:web:66aebe4bd4af5bcc127e69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAo4f8f6vS4bQFEdcI8GfXWB_DivDkUwK4",
  authDomain: "scorefly-061199.firebaseapp.com",
  projectId: "scorefly-061199",
  storageBucket: "scorefly-061199.appspot.com",
  messagingSenderId: "536597490156",
  appId: "1:536597490156:web:e8e6436bfa2d1fb685f8c9",
  measurementId: "G-LMVCXDYHE1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
const provider = new GoogleAuthProvider();

export { auth, provider, storage };
export default db;
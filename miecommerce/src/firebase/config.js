// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChGzEg-0aX6Kzx7vfPY0qG8xDv5AUq-_I",
  authDomain: "ecommerce-burgos.firebaseapp.com",
  projectId: "ecommerce-burgos",
  storageBucket: "ecommerce-burgos.appspot.com",
  messagingSenderId: "910920960104",
  appId: "1:910920960104:web:121b3688117813affe53dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "video-generator-98991.firebaseapp.com",
  projectId: "video-generator-98991",
  storageBucket: "video-generator-98991.firebasestorage.app",
  messagingSenderId: "340633981897",
  appId: "1:340633981897:web:a2816f4cd2039b65b38e18",
  measurementId: "G-0E99HP6Q86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
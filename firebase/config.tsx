// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaMoR271jnh7DMmskhnuhaxAP2K6pb_tg",
  authDomain: "flixtream-3b814.firebaseapp.com",
  databaseURL: "https://flixtream-3b814-default-rtdb.firebaseio.com",
  projectId: "flixtream-3b814",
  storageBucket: "flixtream-3b814.firebasestorage.app",
  messagingSenderId: "818780426990",
  appId: "1:818780426990:web:9a9d9765f54f5d82e9d9ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);

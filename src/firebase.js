import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZL1JVliL9r6zDadddMpqij25vARXYAjQ",
  authDomain: "prochat-23dc9.firebaseapp.com",
  projectId: "prochat-23dc9",
  storageBucket: "prochat-23dc9.appspot.com",
  messagingSenderId: "493826296407",
  appId: "1:493826296407:web:ce75691a8204820c9af112",
  measurementId: "G-E9T1SFK811"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();

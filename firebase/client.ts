import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAgFN5v1CPjIXQAEDR8_yI9-Dy9g3QSD_g",
  authDomain: "prepwise-a95f9.firebaseapp.com",
  projectId: "prepwise-a95f9",
  storageBucket: "prepwise-a95f9.firebasestorage.app",
  messagingSenderId: "418597515316",
  appId: "1:418597515316:web:78e8b1e0b372a412635a61",
  measurementId: "G-MPBY07ED8B"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
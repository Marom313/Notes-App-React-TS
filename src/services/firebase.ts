// src/services/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Replace with your own Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBpyFq0aigc6SNIkpUOCfsbNAVsASFHpIQ",
  authDomain: "assignmentappreact.firebaseapp.com",
  projectId: "assignmentappreact",
  storageBucket: "assignmentappreact.firebasestorage.app",
  messagingSenderId: "821320440343",
  appId: "1:821320440343:web:da692453222ba42a06da52",
  measurementId: "G-MFHHSC63YC"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);

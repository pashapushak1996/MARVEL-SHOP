// Import the functions you need from the SDKs you need
import {
  initializeApp,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/app';

import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBivaMa2Jxn7mC8stwuUPua9cuaUYGQSRE',
  authDomain: 'marvel-shop-72301.firebaseapp.com',
  projectId: 'marvel-shop-72301',
  storageBucket: 'marvel-shop-72301.appspot.com',
  messagingSenderId: '665751166586',
  appId: '1:665751166586:web:77c7f92bf66d00f2a1a5c3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
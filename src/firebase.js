import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAvHRKfbKntTy9gjr8vN_recJPSWi5rClg",
    authDomain: "gadgets-co.firebaseapp.com",
    projectId: "gadgets-co",
    storageBucket: "gadgets-co.appspot.com",
    messagingSenderId: "414229414537",
    appId: "1:414229414537:web:0f4d87a7b66e0467b2bc58"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAB453tJli6HRY_MK44Kg42KRjCzZAEOoc",
  authDomain: "react-firebase-auth-2411c.firebaseapp.com",
  projectId: "react-firebase-auth-2411c",
  storageBucket: "react-firebase-auth-2411c.appspot.com",
  messagingSenderId: "843945831644",
  appId: "1:843945831644:web:2c80fb8f879cf5cf2f5819",
  measurementId: "G-WM12CG7VT9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = async () => {
  await signInWithPopup(auth, googleProvider);
};

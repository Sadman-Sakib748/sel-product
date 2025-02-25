// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUBJHqWuvkY5xszKLKJerxbPAMUaTi_LI",
  authDomain: "online-shop-e1f95.firebaseapp.com",
  projectId: "online-shop-e1f95",
  storageBucket: "online-shop-e1f95.firebasestorage.app",
  messagingSenderId: "494175356922",
  appId: "1:494175356922:web:606642cb51998dc024c643",
  measurementId: "G-VFQMX4CW1B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
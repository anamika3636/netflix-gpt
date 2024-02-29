// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDbNEqeItEVTVgJIESn57Z3AgGvJn9_CQw",
    authDomain: "netflix-gpt-3adf0.firebaseapp.com",
    projectId: "netflix-gpt-3adf0",
    storageBucket: "netflix-gpt-3adf0.appspot.com",
    messagingSenderId: "140773014626",
    appId: "1:140773014626:web:c96bd6e582c760dad6253b",
    measurementId: "G-BWZS49X67N"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0RNL4_mpycRo4PMGqkV74XzEFyO1-sM0",
  authDomain: "coderhouse-react-38045.firebaseapp.com",
  projectId: "coderhouse-react-38045",
  storageBucket: "coderhouse-react-38045.appspot.com",
  messagingSenderId: "915775825075",
  appId: "1:915775825075:web:975c781bfe3c623c35fcc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
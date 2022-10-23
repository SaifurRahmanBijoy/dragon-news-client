// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZgyeajjYWnttbO4-lfx3mYVmehOuuZH0",
  authDomain: "dragon-news1.firebaseapp.com",
  projectId: "dragon-news1",
  storageBucket: "dragon-news1.appspot.com",
  messagingSenderId: "961380015654",
  appId: "1:961380015654:web:c08ccc22379500cfff90e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
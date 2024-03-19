// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4ha9Fb1B3oUKkZxCQh1VG2aP94LvrgfA",
  authDomain: "football-events-8762d.firebaseapp.com",
  projectId: "football-events-8762d",
  storageBucket: "football-events-8762d.appspot.com",
  messagingSenderId: "940589002800",
  appId: "1:940589002800:web:93a74de7408e05161abdf5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

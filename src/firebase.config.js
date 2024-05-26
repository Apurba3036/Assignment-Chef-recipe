// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log('env run', import.meta.env.VITE_apikey)
const firebaseConfig = {
  apiKey: "AIzaSyCGQSp72nBFgUxntZ0Au1nq8KmNKAwml7U",
  authDomain: "chef-recipe-fb59e.firebaseapp.com",
  projectId: "chef-recipe-fb59e",
  storageBucket: "chef-recipe-fb59e.appspot.com",
  messagingSenderId: "371762050799",
  appId: "1:371762050799:web:2be307f41ce4a4067a8d1a",
  measurementId: "G-9QQY0MBHDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
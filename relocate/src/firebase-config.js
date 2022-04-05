// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDP768_qUKBpJ3Z1MSw8BYnsyN_uxJ8AqI",
    authDomain: "relocateloda-7e2bc.firebaseapp.com",
    projectId: "relocateloda-7e2bc",
    storageBucket: "relocateloda-7e2bc.appspot.com",
    messagingSenderId: "265542728154",
    appId: "1:265542728154:web:ea1930c88769e777a168e3",
    measurementId: "G-DT4TGLJBE3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
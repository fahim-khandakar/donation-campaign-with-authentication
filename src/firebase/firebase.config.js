// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxdYrvWqqTZzva0ZbnK1YiG3aDIePbt0c",
  authDomain: "donation-campaign-d3ae9.firebaseapp.com",
  projectId: "donation-campaign-d3ae9",
  storageBucket: "donation-campaign-d3ae9.appspot.com",
  messagingSenderId: "346632648142",
  appId: "1:346632648142:web:7d408e37fb4319d0bf279f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;

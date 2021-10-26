// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWfTvxsNsuzH6DfRLDHkzRV2fxX8dDluk",
  authDomain: "axpz-web-crud.firebaseapp.com",
  projectId: "axpz-web-crud",
  storageBucket: "axpz-web-crud.appspot.com",
  messagingSenderId: "459503106809",
  appId: "1:459503106809:web:27635e37816629955e4028"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
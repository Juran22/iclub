
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDP6RqmrCHxCgtuCjgqNDwyHFsvMRxrms0",
  authDomain: "iclub-e4e5a.firebaseapp.com",
  projectId: "iclub-e4e5a",
  storageBucket: "iclub-e4e5a.appspot.com",
  messagingSenderId: "104224230807",
  appId: "1:104224230807:web:93156c2896eac1c8f8c8d2",
  measurementId: "G-1EP8JKWR0Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const btngoogle = document.getElementById("btngoogle");

btngoogle.addEventListener("click", function(){
    signInWithPopup(auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        window.location.href = "main.html";
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
    });
})
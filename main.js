import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-mhMhf8_xeo0dvc9F57k537PtfZQeBEk",
  authDomain: "login-33686.firebaseapp.com",
  projectId: "login-33686",
  storageBucket: "login-33686.appspot.com",
  messagingSenderId: "681387374900",
  appId: "1:681387374900:web:aece571c63e6eb08284d61"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById('google-login-btn')
googleLogin.addEventListener('click', ()=> {
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    
    window.location.href = "./login.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})
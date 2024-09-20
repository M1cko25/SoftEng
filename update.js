import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
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
const analytics = getAnalytics(app);
const user = auth.currentUser;

function updateAcc(user) {
  const userName = user.displayName;
  const userEmail = user.email;
  const pfp = user.photoURL;
  
  document.getElementById('username').textContent = userName;
  document.getElementById('userEmail').textContent = userEmail;
  document.getElementById('profile').src = pfp;
 }
 
 onAuthStateChanged(auth, (user) => {
  if (user) {
    updateAcc(user);
    const uid = user.id;
    return uid;
  } else {
    alert("Create Account & Login");
    window.location.href = "./index.html";
  }
})
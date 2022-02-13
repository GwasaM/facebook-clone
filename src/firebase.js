import firebase from "./firebase";
//import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1oMJDYtS11GeFT3aPaCvgpSmrwK9Ocdk",
  authDomain: "facebook-clone-f2b2a.firebaseapp.com",
  projectId: "facebook-clone-f2b2a",
  storageBucket: "facebook-clone-f2b2a.appspot.com",
  messagingSenderId: "14804569718",
  appId: "1:14804569718:web:468204ffd3f51cb1191957",
  measurementId: "G-SFMZ352NX8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app); 
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
//const analytics = getAnalytics(app);


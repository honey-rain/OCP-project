// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCCFmAvpIIBYObfe5UO8n1FAPThYyVYZlE",
    authDomain: "open-community-platform.firebaseapp.com",
    projectId: "open-community-platform",
    storageBucket: "open-community-platform.appspot.com",
    messagingSenderId: "434524471224",
    appId: "1:434524471224:web:32d4aeaae31663341a194d",
    measurementId: "G-DK2VSXJ9SQ"
  };

// Ініціалізуємо Firebase
const app = firebase.initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();
export default app;

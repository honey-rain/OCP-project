// firebase.js
import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  // Ваші дані конфігурації Firebase
};

// Ініціалізуємо Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;

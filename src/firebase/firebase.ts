import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyAbWX-4L_Vl_IdDV7OnCqb51l8RrReBylE',
  authDomain: 'luvwen-flix.firebaseapp.com',
  projectId: 'luvwen-flix',
  storageBucket: 'luvwen-flix.appspot.com',
  messagingSenderId: '978814260792',
  appId: '1:978814260792:web:8c0ea9675b7a7a502af8cd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };

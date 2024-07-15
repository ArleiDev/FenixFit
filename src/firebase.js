import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyDgLeYJg_WSdVE25p6Z2W2-9RkR2FRKU",
    authDomain: "authfenixfit.firebaseapp.com",
    projectId: "authfenixfit",
    storageBucket: "authfenixfit.appspot.com",
    messagingSenderId: "815768419413",
    appId: "1:815768419413:web:1c9113e71f17ca1ae328dc",
    measurementId: "G-0ZENSYPNZ6"
  };

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };

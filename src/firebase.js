
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGf0KmodTaDGSyzwiq96hzu54MBwQOeYw",
  authDomain: "fir-b80d9.firebaseapp.com",
  databaseURL: "https://fir-b80d9-default-rtdb.firebaseio.com",
  projectId: "fir-b80d9",
  storageBucket: "fir-b80d9.firebasestorage.app",
  messagingSenderId: "391709206658",
  appId: "1:391709206658:web:57440b47fa026ea6dc6c9b",
  measurementId: "G-F7ZGTD9ZJE"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyC33qUZrmjgdHq5bDqZLQ3S9lpeGj-uHZc",
  authDomain: "beaty-ui.firebaseapp.com",
  projectId: "beaty-ui",
  storageBucket: "beaty-ui.appspot.com",
  messagingSenderId: "250313570647",
  appId: "1:250313570647:web:12a1afcb3556c0940c6612"
};

const app = initializeApp(firebaseConfig);
export const db = getAuth();
// export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore,doc,setDoc} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjg6cEa4EtPbDVOj2e7f8Hp9mXyeEH0Y0",
  authDomain: "finance-track-3b322.firebaseapp.com",
  projectId: "finance-track-3b322",
  storageBucket: "finance-track-3b322.appspot.com",
  messagingSenderId: "1022373823085",
  appId: "1:1022373823085:web:d38e5966a31b3d80103564",
  measurementId: "G-N1QCQYVGC5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db=getFirestore(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {db,auth,provider,doc,setDoc};
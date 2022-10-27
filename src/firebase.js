import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyA0EM8DxHTKuRTZpsr3DdpajskAol2j4pM",
  authDomain: "meblog-19733.firebaseapp.com",
  projectId: "meblog-19733",
  storageBucket: "meblog-19733.appspot.com",
  messagingSenderId: "792781298092",
  appId: "1:792781298092:web:ad0e2c54fa506e01c8c209"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();
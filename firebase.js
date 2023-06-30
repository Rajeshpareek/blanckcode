
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCNCOZ8MQIMbxIlHwYR3N2Msxr2pVGoE8E",
  authDomain: "chat-react-5d570.firebaseapp.com",
  projectId: "chat-react-5d570",
  storageBucket: "chat-react-5d570.appspot.com",
  messagingSenderId: "656295104032",
  appId: "1:656295104032:web:faff6e81fc958ad33d3645"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export  const storage = getStorage();
export const db=getFirestore()
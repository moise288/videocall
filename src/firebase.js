import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6RXNJRwg6Jze8oI4nyR54u263SPw1Drk",
  authDomain: "videocall-b838d.firebaseapp.com",
  projectId: "videocall-b838d",
  storageBucket: "videocall-b838d.appspot.com",
  messagingSenderId: "309339173693",
  appId: "1:309339173693:web:6c3e90101d619c02608b54"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()

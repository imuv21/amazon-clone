import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDkORGMquLcHhzE4_UCFHgEIqlRiuNEdXc",
  authDomain: "e-clone-449f6.firebaseapp.com",
  databaseURL: "https://e-clone-449f6-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "e-clone-449f6",
  storageBucket: "e-clone-449f6.appspot.com",
  messagingSenderId: "1073563981774",
  appId: "1:1073563981774:web:ba8db02393ed5ca8bdfd9f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

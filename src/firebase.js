
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "learning-30277.firebaseapp.com",
  projectId: "learning-30277",
  storageBucket: "learning-30277.firebasestorage.app",
  messagingSenderId: "454008135399",
  appId: "1:454008135399:web:7315b55274eff5aae40c42",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);



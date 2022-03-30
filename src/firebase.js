import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCcLrK-jSaoy8E04RqpDRD66Cm_v6W4Prw",
  authDomain: "elem-backend.firebaseapp.com",
  databaseURL: "https://elem-backend-default-rtdb.firebaseio.com",
  projectId: "elem-backend",
  storageBucket: "elem-backend.appspot.com",
  messagingSenderId: "176012452883",
  appId: "1:176012452883:web:8c7d2095593fec3b8fcbe6",
  measurementId: "G-2RMZJHP8QY"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getDatabase(app);
export default app;
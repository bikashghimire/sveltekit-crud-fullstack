import { getApps, initializeApp, getApp, deleteApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDu82p6V9VvAd07Ua7qP46hHG70msc7zsc",
  authDomain: "sveltekit-crud-fullstack.firebaseapp.com",
  projectId: "sveltekit-crud-fullstack",
  storageBucket: "sveltekit-crud-fullstack.appspot.com",
  messagingSenderId: "481645944354",
  appId: "1:481645944354:web:c3c0705cd56a3068d1f47b,"
};
let firebaseApp;
if (!getApps().length) {
  firebaseApp = initializeApp(firebaseConfig);
} else {
  firebaseApp = getApp();
  deleteApp(firebaseApp);
  firebaseApp = initializeApp(firebaseConfig);
}
getFirestore(firebaseApp);
getAuth(firebaseApp);

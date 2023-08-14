import firebase from "firebase/app";
import fbAuth from "firebase/auth";
import fbRestore from "firebase/firestore";
import fbStorage from "firebase/storage";

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_AUTH_DOMAIN",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_STORAGE_BUCKET",
  messagingSenderId: "SEU_MESSAGING_SENDER_ID",
  appId: "SEU_APP_ID",
};
firebase.initializeApp(firebaseConfig);

export { fbAuth, fbRestore, fbStorage };
export default firebase;

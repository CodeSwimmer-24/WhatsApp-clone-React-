import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDNKM9yj2Z1_8ZfIgjCmNYYM54VYZ0chN4",
  authDomain: "whatsapp-clone-c2d39.firebaseapp.com",
  projectId: "whatsapp-clone-c2d39",
  storageBucket: "whatsapp-clone-c2d39.appspot.com",
  messagingSenderId: "1074479128079",
  appId: "1:1074479128079:web:0c7aa87145f7341b730d7a",
  measurementId: "G-H620G40VYH",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

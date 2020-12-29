// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
 
const firebaseConfig = {
    apiKey: "AIzaSyBTGOyp7i1TMzrNB-zhHs0zlkVllcArAQ4",
    authDomain: "facebook-clone-50b96.firebaseapp.com",
    projectId: "facebook-clone-50b96",
    storageBucket: "facebook-clone-50b96.appspot.com",
    messagingSenderId: "239365743168",
    appId: "1:239365743168:web:b07294fe94419bd71a75a5",
    measurementId: "G-GSZRD9BVKT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db;
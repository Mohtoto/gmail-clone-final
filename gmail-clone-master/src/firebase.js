import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDTi6XYqwkDNCvFXjt2eUf_g_VLt2W85Fk",
    authDomain: "clone-2e69d.firebaseapp.com",
    projectId: "clone-2e69d",
    storageBucket: "clone-2e69d.appspot.com",
    messagingSenderId: "788836195006",
    appId: "1:788836195006:web:d1c932445b577bef7f1cef"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export { db , auth , provider}




import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBuZMB6F7FcvMoMdjGdDNdB5nz9bNFXyGI",
  authDomain: "crwn-db-9d0d5.firebaseapp.com",
  databaseURL: "https://crwn-db-9d0d5.firebaseio.com",
  projectId: "crwn-db-9d0d5",
  storageBucket: "crwn-db-9d0d5.appspot.com",
  messagingSenderId: "520319825257",
  appId: "1:520319825257:web:3ef43544c0492dade139f8",
  measurementId: "G-TKTTBQSLH3"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
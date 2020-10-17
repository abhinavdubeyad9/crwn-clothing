import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
  apiKey: "AIzaSyAC0rr_V7OGmXIaYLnqF5cu6dXPIu-rJ00",
  authDomain: "crwn-db-ca170.firebaseapp.com",
  databaseURL: "https://crwn-db-ca170.firebaseio.com",
  projectId: "crwn-db-ca170",
  storageBucket: "crwn-db-ca170.appspot.com",
  messagingSenderId: "723617273466",
  appId: "1:723617273466:web:6efd3fc4a4f16ccf0f0dc3",
  measurementId: "G-V4N3J9RLFG"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

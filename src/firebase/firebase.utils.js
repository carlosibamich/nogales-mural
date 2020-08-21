import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAonSSiopSQ6xlQZo64ejzv3F63UuLhZsE",
  authDomain: "nogales-mural.firebaseapp.com",
  databaseURL: "https://nogales-mural.firebaseio.com",
  projectId: "nogales-mural",
  storageBucket: "nogales-mural.appspot.com",
  messagingSenderId: "31052770962",
  appId: "1:31052770962:web:da488805e9c2e87080004b",
  measurementId: "G-5HJJ5Y5SVT"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
//export in case entire library needs to be accessed
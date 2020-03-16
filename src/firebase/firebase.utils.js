import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAaenOOs0V4gpNIG1EwTUQ5PDdAfe-fODU',
    authDomain: 'clothing-store-db-d7a6a.firebaseapp.com',
    databaseURL: 'https://clothing-store-db-d7a6a.firebaseio.com',
    projectId: 'clothing-store-db-d7a6a',
    storageBucket: 'clothing-store-db-d7a6a.appspot.com',
    messagingSenderId: '423604712200',
    appId: '1:423604712200:web:01a798dc98b029566132bd',
    measurementId: 'G-M4BMXB7VLE'
};

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
            console.log('error created user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

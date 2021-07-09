// screen if you're not yet authenticated.

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../../firebase.config';

export const initializeLoginFramwork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const googleSign = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            return result.user
        }).catch((error) => {
            console.log(error);
        });
}
export const facebookSign = () => {
    var facebookProvider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then((result) => {
            return result.user
        })
        .catch((error) => {
            console.log(error);
        });
}

export const createAccount = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            return res.user
        })
        .catch((error) => {
            console.log(error);
        });
}
export const loginAccount = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            return res.user
        })
        .catch((error) => {
            console.log(error);
        });
}

export const signOut = () => {
    firebase.auth().signOut()
    .then((res) => {
       console.log(res);
    }).catch((error) => {
        console.log(error);
    });
}
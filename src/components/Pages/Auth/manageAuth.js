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
            return error
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
            return error;
        });
}

export const createAccount = (email, password, name) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            updateName(name)
            return res.user
        })
        .catch((error) => {
            return error
        });
}
export const loginAccount = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            return res.user
        })
        .catch((error) => {
            return error
        });
}
const updateName = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(() => {
        // Update successful
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
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
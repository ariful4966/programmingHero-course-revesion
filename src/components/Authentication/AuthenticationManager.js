import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const firebaseInstalizationFramwork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}
firebaseInstalizationFramwork()
export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then((res) => {
            return res.user
        }).catch((error) => {
            return error
        });
}

export const createUser = (email, password, name) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((res) => {
            const newUser = res.user
            updateUserName(name)
            return newUser
        })
        .catch((error) => {
            return error
        });
}

export const loginUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            return res.user
        })
        .catch((error) => {
            return error
        });
}

export const signOut = () => {
    return firebase.auth()
        .signOut()
        .then(res => {
            return res
        })
        .catch((error) => {
            return error
        });
}

const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: name
    }).then(() => {
        // Update successful
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });
}
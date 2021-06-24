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
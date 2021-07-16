
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";





export const instalizationLoginFramwork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const googleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            return result.user
        }).catch((error) => {
            return error.message
        });
}

export const getAuthToken = () => {
    return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('token', idToken)
        }).catch(function (error) {
            // Handle error
        });
}
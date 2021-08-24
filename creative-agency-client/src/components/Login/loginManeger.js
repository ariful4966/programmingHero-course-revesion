import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const firebaseInitializationFramwork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


export const handleSignWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            return result.user
        }).catch((error) => {
            return error.message
        });

}
export const createToken = () => {
    return firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
            sessionStorage.setItem('userToken', idToken)
        }).catch(function (error) {
            // Handle error
        });
}

export const logOut = () => {
    return firebase.auth().signOut()
        .then(() => {
            return true
        }).catch((error) => {
            // An error happened.
        });
}
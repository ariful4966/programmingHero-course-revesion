import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../../firebase.config";

export const firebaseInitializationFramwork = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const createNewUser = (user) => {
    return firebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            updateUserName(user.name)
            emailVerification()
            return res.user;
        })
        .catch((error) => {
            return error
            // ..
        });
}
export const loginUser = (user) => {
    return firebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            firebaseUserToken()
            return res.user
            // ...
        })
        .catch((error) => {
            return error
        });

}
export const resetUserPassword = (user) => {
   return firebase.auth().sendPasswordResetEmail(user.email)
        .then(() => {
            alert('Pleas Check Your Gmail')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}
export const signOutUser = () => {
    return firebase.auth()
        .signOut()
        .then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

}

const updateUserName = (name) => {
    firebase.auth().currentUser.updateProfile({
        displayName: name
    }).then(() => {
        // Update successful
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });
}

const emailVerification = () => {
    firebase.auth().currentUser.sendEmailVerification()
        .then(() => {
            // Email verification sent!
            // ...
        });
}

const firebaseUserToken = () => {
    firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
        sessionStorage.setItem('userToken', idToken)
    }).catch(function (error) {
        // Handle error
    });
}
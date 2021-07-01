
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const initializeLoginFramework = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}

export const handleGoogleLogin = (user) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const getUser = {
                ...user,
                name: displayName,
                email: email,
                photo: photoURL,
                isLogin: true
            }
            return getUser;
        })
        .catch(err => {
            console.log(err.message);
        })
}

export const handleFacebookLogin = (user) => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then(res => {
            const { displayName, email, photoURL } = res.user;
            const getUser = {
                ...user,
                name: displayName,
                email: email,
                photo: photoURL,
                isLogin: true
            }
            return getUser
        })
        .catch(err => {
            console.log(err.message);
        })
}

export const handleLogout = (user) => {
    return firebase.auth().signOut()
        .then(res => {

            const emptyUser = {
                ...user,
                name: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
                photo: '',
                isLogin: false,
                error: '',
                success: false
            }
            return emptyUser

        }).catch((error) => {
            console.log(error.message);
        });
}

export const createUserWithEmailAndPassword = (user) => {
    return firebase.auth().createUserWithEmailAndPassword(user.email, user.confirmPassword)
        .then(res => {
            const newUserInfo = {
                ...res.user,
                name: res.user.displayName,
                error: "",
                success: true
            }
            updateProfile(user)
            verifyEmail()
            return newUserInfo

        })
        .catch((error) => {
            const newUserInfo = {}
            newUserInfo.error = error.message;
            newUserInfo.success = false
            return newUserInfo
        });
}

export const singInWithEmailAndPassword = (user) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            const newUserInfo = {
                ...res.user,
                name: res.user.displayName,
                error: "",
                success: true,
                isLogin: true
            }
            return newUserInfo

        })
        .catch((error) => {
            const newUserInfo = {}
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            newUserInfo.isLogin = false;
            return newUserInfo

        });
}

export const verifyEmail = () => {
    return firebase.auth()
        .currentUser.sendEmailVerification()
        .then(() => {
            // Email verification sent!
            // ...
        });
}
export const resetPassword = (email) => {
    return firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            console.log(error);
            // ..
        });
}
const updateProfile = (newUser) => {
    var user = firebase.auth().currentUser;
    console.log(newUser);
    user.updateProfile({
        displayName: newUser.name,
        phoneNumber: newUser.phone
    }).then(res => {
        console.log(res);
    }).catch(function (error) {
        console.log(error.message);
    });
}
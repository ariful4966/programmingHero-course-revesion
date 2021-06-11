
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';

export const initializeLoginFramework = () => { 
    if(firebase.apps.length === 0){
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
            const newUserInfo = res.user
            newUserInfo.error = "";
            newUserInfo.success = true
            updateProfile(user)
            return newUserInfo
            
        })
        .catch((error) => {
            const newUserInfo = {  }
            newUserInfo.error = error.message;
            newUserInfo.success = false
            return newUserInfo
        });
}

export const singInWithEmailAndPassword = (user) => {
    return firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
            const newUserInfo = res.user
            newUserInfo.error = "";
            newUserInfo.success = true;
            newUserInfo.isLogin = true;
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
const updateProfile = (newUser) => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
        displayName: newUser.name,
        phoneNumber: newUser.phone
    }).then(res => {
        console.log(res);
    }).catch(function (error) {
        console.log(error.message);
    });
}
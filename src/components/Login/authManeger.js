
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config"


export const instalizationLoginFramwork = ()=>{
    if(firebase.apps.length === 0){
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
            console.log(error);
        });
}
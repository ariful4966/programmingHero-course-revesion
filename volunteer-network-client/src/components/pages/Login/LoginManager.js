import firebase from "firebase/app";

import "firebase/auth";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import firebaseConfig from "../../../firebase.config";

export const firebaseInitilizationFremwork = ()=>{
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig)
    }

    
}


export const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const { displayName, email } = result.user
            const newUser = {
                name: displayName,
                email,
                isLogin: true
            }
            return newUser
        }).catch((error) => {
            const errUser = {
                error: error.message
            }
            return errUser;
        });
}

function PrivateRoute({ user, children, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.isLogin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const mapStateToProps = state => {
    return state
}
export default connect(mapStateToProps)(PrivateRoute)
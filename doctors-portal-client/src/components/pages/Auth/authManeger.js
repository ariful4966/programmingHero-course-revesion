import firebase from "firebase/app";
import "firebase/auth";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import firebaseConfig from "../../../firebase.config";



export const initializationFirebase = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig)
    }
};

export const createUserWithEmailPassWord = (user) => {
    const { email, confirmPassword } = user;
    return firebase.auth().createUserWithEmailAndPassword(email, confirmPassword)
        .then((res) => {
            updateUserName(user.name)
            return res
        })
        .catch((error) => {
            return error
        });
}

export const signInUserWithEmailPassword = (user) => {
    const { email, password } = user;
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then((res) => {
            return res
        })
        .catch((error) => {
            return error;
        });

}

export const signOut = () => {
    return firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
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
    return { user: state.user }
}
export default connect(mapStateToProps)(PrivateRoute)


import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config.js';

import './App.css';
firebase.initializeApp(firebaseConfig);

function App() {
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    photo: '',
    error: '',
    success: false
  })
  const [newUser, setnewUser] = useState(false)


  const googleProvider = new firebase.auth.GoogleAuthProvider()
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const handleSignIn = () => {
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((res) => {
        const { displayName, photoURL, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUser(signedInUser)

      })
      .catch((err) => {
        console.log(err.message);
      })
  }
  const handleSignOut = () => {
    firebase.auth()
      .signOut()
      .then(res => {
        const signOutUser = {
          isSignedIn: false,
          name: '',
          email: '',
          password: '',
          photo: ''

        }
        setUser(signOutUser)
        console.log(res);
      })
      .catch(err => {
        console.log(err.message);
      })
  }

  const handleSubmit = (e) => {

    if (newUser && (user.name && user.password)) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          updateUserName(user.name)

        })
        .catch(err => {
          const newUserInfo = {
            ...user
          }
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo)

        })
    }
    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          console.log('login', res);

        })
        .catch(err => {
          const newUserInfo = {
            ...user
          }
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo)
          console.log(err);
        })
    }
    e.preventDefault()

  }
  const handleBlur = (event) => {

    let isFieldValid = true;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
      //regular expression
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value)
      //Regular expression
      isFieldValid = (isPasswordValid && passwordHasNumber);
    }
    if (isFieldValid) {
      const newUserInfo = {
        ...user
      }
      newUserInfo[event.target.name] = event.target.value
      setUser(newUserInfo)
    }
  }
  const updateUserName = (name) => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log('User Name update successfully');
    }).catch(function (error) {
      console.log(error);
    });
  }
  const handleFbSignIn = () => {
    firebase
      .auth().signInWithPopup(fbProvider)
      .then(res => {
        const { displayName, email, photoURL} = res.user;
        const newUser ={
          ...user,
          name:displayName,
          email:email,
          photo:photoURL,
          isSignedIn: true
        }
        setUser(newUser)
      })
      .catch(err => {
        console.log(err);
      })
  }
  return (
    <div className="App">
      {
        user.isSignedIn ?
          <button onClick={handleSignOut}>Sign out</button> :
          <button onClick={handleSignIn}> 🇬 Sign in</button>

      } <br />
      <button onClick={handleFbSignIn}>Sign in Using Facebook</button>
      {
        user.isSignedIn &&
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your Email: {user.email}</p>
          <img src={user.photo} alt="Photo" />
        </div>
      }
      <h1>Our Own Authentication</h1>
      <input type="checkbox" name="newUser" onChange={() => setnewUser(!newUser)} id="newUser" />
      <label htmlFor="newUser">New User Sign Up</label> <br />
      <form onSubmit={handleSubmit}>
        {
          newUser && <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" />
        }
        <br />
        <input type="email" onBlur={handleBlur} name="email" placeholder="Your Email Address" required />
        <br />
        <input type="password" onBlur={handleBlur} name="password" placeholder="Your Password" required />
        <br />
        <input type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {
        user.success && <p style={{ color: 'green' }}>User {newUser ? 'Created' : 'Logged in'} Successfully</p>
      }

    </div>
  );
}

export default App;

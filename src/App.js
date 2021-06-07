
import { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

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


  const provider = new firebase.auth.GoogleAuthProvider()
  const handleSignIn = () => {
    firebase.auth()
      .signInWithPopup(provider)
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
    
    if (user.name && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user }
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo)
          
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
  return (
    <div className="App">
      {
        user.isSignedIn ?
          <button onClick={handleSignOut}>Sign out</button> :
          <button onClick={handleSignIn}> 🇬 Sign in</button>

      }
      {
        user.isSignedIn &&
        <div>
          <p>Welcome, {user.name}</p>
          <p>Your Email: {user.email}</p>
          <img src={user.photo} alt="Photo" />
        </div>
      }
      <h1>Our Own Authentication</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" name="name" onBlur={handleBlur} placeholder="Your Name" /><br />
        <input type="email" onBlur={handleBlur} name="email" placeholder="Your Email Address" required /><br />
        <input type="password" onBlur={handleBlur} name="password" placeholder="Your Password" required />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: 'red' }}>{user.error}</p>
      {
        user.success && <p style={{color:'green'}}>User Created Successfully</p>
      }

    </div>
  );
}

export default App;

import React from 'react';
import { FormControl } from 'react-bootstrap';

const SignupForm = ({ userState }) => {
    const [newUser, setNewUser, user, setUser, handleBlur, handleSubmit] = userState;
    return (
        <div className="card">
            <h2>Sign up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Your Name</label>
                    <FormControl type="text" name="name" onBlur={handleBlur} id="name" />
                </div>
                <div>
                    <label htmlFor="email">Your Email Address</label>
                    <FormControl type="email" name="email" onBlur={handleBlur} id="email" />
                </div>
                <div>
                    <label htmlFor="phone">Your Phone</label>
                    <FormControl type="tel" name="phone" onBlur={handleBlur} id="phone" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <FormControl type="password" name="password" onBlur={handleBlur} id="password" />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Retype Your Password</label>
                    <FormControl type="password" name="confirmPassword" onBlur={handleBlur} id="confirmPassword" />
                </div>
                <p onClick={() => setNewUser(!newUser)}>Already Have Account</p>
                <input type="submit" value="Sign up" />
            </form>
        </div>
    );
};

export default SignupForm;
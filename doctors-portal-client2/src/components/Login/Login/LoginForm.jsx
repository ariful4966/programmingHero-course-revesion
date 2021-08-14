import React from 'react';

const LoginForm = ({hnadleBlur, forgotPassword, user}) => {
    return (
        <>
            <div className="mb-3">
                <input type="email" name="email"  className="form-control" placeholder="Email Address" onBlur={hnadleBlur} />
            </div>
            <div className="mb-3">
                <input type="password" name="password"  className="form-control" placeholder="********" onBlur={hnadleBlur} />
            </div>
            <p style={{ color: 'red' }} className="text-start forgot" onClick={forgotPassword}>Are You Forgote Your Password?</p>
        </>
    );
};

export default LoginForm;
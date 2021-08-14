import React from 'react';

const SignupForm = ({ hnadleBlur }) => {
    return (
        <>
            <div className="mb-3">
                <input type="name" className="form-control" placeholder="Your Name" name="name" onBlur={hnadleBlur} />
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" placeholder="Emaile Address" name="email" onBlur={hnadleBlur} />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="********" name="password" onBlur={hnadleBlur} />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" placeholder="********" name="confirmPassword" onBlur={hnadleBlur} />

            </div>
        </>
    );
};

export default SignupForm;
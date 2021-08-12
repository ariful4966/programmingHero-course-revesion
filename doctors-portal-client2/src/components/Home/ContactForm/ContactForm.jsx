import React from 'react';

const ContactForm = () => {
    return (
        <form >
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email Address *" />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Subject *" />
            </div>
            <div className="mb-3">
                <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "200px" }}>Message *</textarea>
            </div>
            <button type="submit" className="btn btn-primary" style={{ margin: "0 auto", display: 'block' }}>Submit</button>
        </form>
    );
};

export default ContactForm;
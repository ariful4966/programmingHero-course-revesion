import React from 'react';
import { Link } from 'react-router-dom';
const NotMatch = () => {
    return (
        <div>
            <h1>4O4</h1>
            <p>Page Not Found </p>
            <p>Back to <Link to="/">Home</Link></p>
        </div>
    );
};

export default NotMatch;
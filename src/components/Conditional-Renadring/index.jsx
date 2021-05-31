import React from 'react';
import Users from './User';

const Condition = (props) => {
    const { familiar, handleToggle } = props;
    return (
        <div>
            <h1>Conditional Format :{familiar.toString()}</h1>
            <button onClick={handleToggle}>Toggle Button</button>

            <Users familiar={familiar}/>
        </div>
    );
};

export default Condition;
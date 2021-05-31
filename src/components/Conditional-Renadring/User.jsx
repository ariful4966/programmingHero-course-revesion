import React from 'react';

const Users = ({ familiar }) => {
    return (
        <div>
            <div>
                <h2>Greetings</h2>
                {
                    familiar ? <p>Welcome, my friend.</p> :
                        <p>Who the hell are you?</p>
                }
            </div>
            <div>
                <h2>Food</h2>
                {
                    familiar ? <p>I Will buy Food for you</p> 
                       : <p>Lets eat his his whose whose?</p>
                }
                </div>
            <h2>Connection</h2>
            {
                familiar && <p>Let's join my facebook.</p>

            }
        </div>
    );
};

export default Users;
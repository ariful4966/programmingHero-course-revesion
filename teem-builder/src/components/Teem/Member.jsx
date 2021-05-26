import React from 'react';

const SingleMember = (props) => {
    
    const { name, picture } = props.single;
    const fullName = `${name.title} ${name.first} ${name.last}`;
    const dismissFromTeem=props.dismissFromTeem;
    return (
        <div className="teemMember">
            <div className="memPhoto">
                <img src={picture.medium} alt="" />
            </div>
            <div className="memInfo">
                <h4>{fullName}</h4>
            </div>
            <div>
                <button  onClick={()=>dismissFromTeem(props.single)}>Dismiss</button>
            </div>
        </div>
    );
};

export default SingleMember;
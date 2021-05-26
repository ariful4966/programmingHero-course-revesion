import { useState } from 'react';
import './User.css'

const User = (props) => {
    const addTeemMember = props.addTeemMember;
    const [mobile, setMobile] = useState('');


  const showPhoneNumber = (number)=>setMobile(number)
    const {name, picture, email, gender, phone} = props.user;
    const fullName = `${name.title} ${name.first} ${name.last}`
    return (
        <div className="single-user">
            <div className="photo">
                <img src={picture.large} alt="" />
            </div>
            <div className="info">
                <h2>Name: {fullName}</h2>
                <p>Email: <em>{email}</em></p>
                <p>Gender: {gender}</p>
                <p>
                    {mobile?`Phone: ${mobile}`: ''}
                </p>

                <button onClick={()=>showPhoneNumber(phone)}>Show Phone Number</button>
                <button onClick={()=>addTeemMember(props.user)}>Add Teem</button>
            </div>
        </div>
    );
};

export default User;                    
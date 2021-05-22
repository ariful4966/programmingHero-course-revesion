import './User.css'

const User = ({ user, addFriend, friends }) => {
    const { picture, name, phone, email, gender, income, company, website, address } = user;
    const frdId = friends.find(fd => fd.id === user.id)
    return (
        <div className="user-info">
            <div className="info-left">
                <img src={picture} alt="" />
            </div>
            <div className="info-right">
                <h3> Name: {name}</h3>
                <p>Phone: <em>{phone}</em></p>
                <p>Email: {email}</p>
                <p>Gender: {gender}</p>
                <p>Home Address: <address>{address}</address></p>
                <p>Yearly Income : ${income}</p>
                <p>Job Company: {company}</p>
                <p>Personal Website: <a href={website}>Website</a></p>
                <button className="user-btn" onClick={() => { addFriend(user) }} >{frdId ? 'Requested' : 'Add Friend'}</button>
            </div>
        </div>
    );
};

export default User;
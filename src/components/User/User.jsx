import './User.css'

const User = ({user}) => {
    console.log(user);
    const {picture, name, phone, email, gender, income, company, website, address}= user;
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
                <button>Add Friend</button>
           </div>
        </div>
    );
};

export default User;
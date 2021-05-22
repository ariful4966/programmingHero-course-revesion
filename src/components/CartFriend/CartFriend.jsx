import './CartFriend.css'

const CartFriend = ({ friend, handleUnFriend }) => {
    return (
    <div className="single-cart">
        <div className="cart-img">
            <img src={friend.picture} alt="" />
        </div>
        <div className="cart-name">
            <h4>{friend.name}</h4>
            <button className="unfrd-btn" onClick={() => handleUnFriend(friend)}>Unfriend</button>
        </div>
    </div>
    );
}


export default CartFriend;
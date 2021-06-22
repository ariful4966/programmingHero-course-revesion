import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import './Navigation.scss'
import { useState } from 'react';
import { useContext } from 'react';
import { Dataprovid } from '../../App';
import CartModal from '../CartModal/CartModal';
import avatar from '../../images/avater.jpg'
import { signOut } from '../Authentication/AuthenticationManager';

const Navigation = () => {
    const { data, setData } = useContext(Dataprovid)
    const { cart, user } = data;
    const [modal, setModal] = useState(false);
    const openModal = () => {
        setModal(!modal)
    }
    const handleSignOut = () => {
        signOut() 
        .then(() => {
            const signOutUser = {
                name: '',
                email: '',
                photo: '',
                password: '',
                confirmPassword: '',
                isLogedIn: false,
                isSuccess: false,
                error: ''
            }
            setData({ ...data, user: signOutUser })
        })   
    }
    return (
        <nav>
            <ul>
                <li>
                    <Link onClick={openModal}><AddShoppingCartIcon /> {cart.length}</Link>
                </li>
                {
                    user.isLogedIn ? <>
                        <li>{user.name}</li>
                        <li>
                            {
                                user.photo && user.photo ? <img src={user.photo} alt="" />: <img src={avatar} alt="" />
                            }
                        </li>
                        <li><Link onClick={handleSignOut}>Sign Out</Link></li>
                    </> :
                        <>
                            <li>
                                <Link to="/login">Sign up</Link>
                            </li>
                            <li>
                                <Link to="/login" className="btn btn-bg">Login</Link>
                            </li>
                        </>
                }
            </ul>
            {
                modal && <CartModal cart={cart} modal={modal} setModal={setModal}></CartModal>
            }
        </nav>
    );
};


export default Navigation;
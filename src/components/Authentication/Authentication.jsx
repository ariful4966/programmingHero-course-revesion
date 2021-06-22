import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@material-ui/core';
import logo from '../../images/logo2.png';
import './Login.scss'
import SignUp from './SignUp';
import Login from './Login';
import OthersLogin from './OthersLogin';
import { firebaseInstalizationFramwork } from './AuthenticationManager';
import { connect } from 'react-redux';

const Authentication = (props) => {
    const [page, setPage] = useState(false)
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } }
    console.log(props)
    return (
        <div className="auth_section">
            <Container>
                <div className="auth_area">
                    <div className="auth">
                        <div className="auth_logo">
                            <img src={logo} alt="" />
                        </div>
                        <form action="">
                            {page ?
                                <SignUp /> :
                                <Login />
                            }
                            <p style={{ color: 'red', textAlign: 'center' }} onClick={() => setPage(!page)}>Alrady Have An Account</p>


                        </form>
                        {
                            !page && <OthersLogin />
                        }
                    </div>
                </div>
            </Container>
        </div>
    );
};
const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
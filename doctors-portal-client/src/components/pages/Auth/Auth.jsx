
import { Container, Grid, Typography } from '@material-ui/core'
import Header from '../../partial/Header/Header';
import LoginForm from './LoginForm'
import SignupForm from './SignupForm';
import './Auth.scss'
import { connect } from 'react-redux';
import { updateUserInfo, submitUserInfo, handleLoginSignupForm } from '../../../redux/action/action';
import { createUserWithEmailPassWord, initializationFirebase, signInUserWithEmailPassword } from './authManeger';
import { useHistory, useLocation } from 'react-router-dom';

const Auth = (props) => {
    const { user, updateUserInfo, submitUserInfo, handleLoginSignupForm, newUser } = props;
    initializationFirebase();

    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };
    const handleLoginSignUp = (e) => {
        e.preventDefault();
        if (newUser) {
            createUserWithEmailPassWord(user)
                .then(res => {
                    handleLoginSignupForm(false)
                    submitUserInfo(res)
                })
        } else {
            signInUserWithEmailPassword(user)
                .then(res => {
                    const { displayName, email } = res;
                    const newAddedUser = {
                        name: displayName,
                        email,
                        isLogin: true
                    }
                    submitUserInfo(newAddedUser)
                    history.replace(from);
                })
        }
    }

    return (
        <div className="auth_area">
            <Header />
            <Container>
                <Grid container spacing={3}>
                    <Grid item md={5} className="auth_align">
                        <div className="authentication">
                            <Typography variant="h3">{newUser ? 'Sign up' : 'Login'}</Typography>
                            {
                                newUser ?
                                    <SignupForm userBlur={updateUserInfo} setLogin={handleLoginSignupForm} formSubmit={handleLoginSignUp} />
                                    :
                                    <LoginForm userBlur={updateUserInfo} setLogin={handleLoginSignupForm} formSubmit={handleLoginSignUp} />

                            }
                        </div>
                    </Grid>
                    <Grid item md={7}>
                        <div className="auth_banner">
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};
const mapStateToProps = state => {
    return { user: state.user, newUser: state.newUser }
}
const mapDispatchToProps = {
    updateUserInfo,
    submitUserInfo,
    handleLoginSignupForm
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
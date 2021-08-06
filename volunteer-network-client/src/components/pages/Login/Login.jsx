
import { Col, Container, Row, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import logo from '../../../images/logo.png'
import './Login.css'
import { GOOGLE_SIGN_IN } from '../../../redux/actions';
import googleLogo from '../../../images/google.png';
import { firebaseInitilizationFremwork, getAuthToken, signInWithGoogle } from './LoginManager';

const Login = (props) => {
    const location = useLocation()
    const history = useHistory()
    firebaseInitilizationFremwork()

    let { from } = location.state || { from: { pathname: "/" } };
    const { user, dispatch } = props

    const handleSignIn = () => {

        signInWithGoogle()
            .then(res => {
                dispatch({ type: GOOGLE_SIGN_IN, res })
                getAuthToken()
            })

    }
    if (user.isLogin) {
        history.replace(from)
    }



    return (
        <div className="Login_area">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="Login_section">
                            <div className="Login_logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>

                            <div className="loginBox">
                                <div className="reg_form_area">
                                    <div className="reg_form_heading">
                                        <h2>Login as with</h2>
                                    </div>
                                    <div className="login_btn_area" onClick={handleSignIn}>
                                        <img src={googleLogo} alt="GOOGLE ICON" />
                                        <Button variant="default"  >Continue With Google</Button>
                                    </div>
                                    <p>Do you have an account? <Link target="_blank" to="google.com">Create an Account</Link></p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = dispatch => ({
    dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);
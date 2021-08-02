import React, { useReducer } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import { handleBlur } from '../../../Reducer/actions';
import { initialState, reducer } from '../../../Reducer/reactReducer';
import RegistationForm from '../../partials/RegistationForm/RegistationForm';
import './Registation.css'

const Registation = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return (
        <div className="registation_area">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="registation_section">
                            <div className="registation_logo">
                                <img src={logo} alt="" />
                            </div>
                            <div className="reg_form_area">
                                <div className="reg_form_heading">
                                    <h2>Registation as Volunteer</h2>
                                </div>
                                <RegistationForm dispatch={dispatch} handleBlur={handleBlur} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Registation;
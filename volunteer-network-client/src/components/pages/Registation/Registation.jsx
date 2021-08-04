
import { Col, Container, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import logo from '../../../images/logo.png'
import RegistationForm from '../../partials/RegistationForm/RegistationForm';
import './Registation.css'

const Registation = (props) => {
    const { categoris } = props
    const { catKey } = useParams();
    const paramCategory = categoris.find(ct => ct._id === catKey)

    return (
        <div className="registation_area">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="registation_section">
                            <div className="registation_logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                            <div className="reg_form_area">
                                <div className="reg_form_heading">
                                    <h2>Registation as Volunteer</h2>
                                </div>
                                <RegistationForm  paramCategory={paramCategory}/>
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

export default connect(mapStateToProps)(Registation);
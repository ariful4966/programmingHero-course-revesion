import axios from 'axios';
import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handleBlur } from '../../../redux/actions';

const RegistationForm = (props) => {
    const { handleBlur, paramCategory, registation , user} = props;
    const history = useHistory()

    const handleSubmit = (e)=>{
        e.preventDefault();


        axios.post('http://localhost:2400/registation', {...registation , img: paramCategory.img})

          .then(function (response) {
            console.log(response);
            history.push('/events')
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    return (
        <Form  onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="name" placeholder="Fullname" onBlur={handleBlur} defaultValue={user.name} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" name="email" placeholder="Username & Email" onBlur={handleBlur} defaultValue={user.email} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="date" name="date"  onBlur={handleBlur} defaultValue={new Date()}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" name="description" placeholder="Description" onBlur={handleBlur} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="organization" placeholder="Organization Name" defaultValue={paramCategory.name && paramCategory.name} onBlur={handleBlur} />
            </Form.Group>
            <Button className="form-control" type="submit">Registation</Button>
        </Form>
    );
};
const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    handleBlur
}
export default connect(mapStateToProps, mapDispatchToProps)(RegistationForm);
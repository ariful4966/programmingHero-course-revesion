import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { DATA_BLUR } from '../../../Reducer/actions';

const RegistationForm = ({ handleBlur, dispatch }) => {

    const handleBlurEvent = (e) => {
        // dispatch(handleBlur(e))
    }
    return (
        <Form >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="name" placeholder="Fullname" onBlur={(e) => dispatch(handleBlur(e))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="email" name="email" placeholder="Username & Email" onBlur={(e) => dispatch(handleBlur(e))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="date" name="date" placeholder="Date" onBlur={(e) => dispatch(handleBlur(e))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" name="description" placeholder="Description" onBlur={(e) => dispatch(handleBlur(e))} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" name="organization" placeholder="Organization Name" onBlur={(e) => dispatch(handleBlur(e))} />
            </Form.Group>
            <Button className="form-control" type="submit">Registation</Button>
        </Form>
    );
};

export default RegistationForm;
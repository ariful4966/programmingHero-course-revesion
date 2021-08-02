import React, { useReducer } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { initialState, reducer } from '../../../Reducer/reactReducer';

const Search = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(state);
    return (
        <section className="seach_area text-center">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="heading">
                            <h2>I Grow By Helping People by Need {state.count}</h2>
                            <Button onClick={() => dispatch({ type: 'increment' })}>Increment</Button>
                            <Button onClick={() => dispatch({ type: 'decrement' })}>Decrement</Button>
                        </div>
                        <div className="search">
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                />
                                <Button variant="primary">Search</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Search;

import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';

const Search = () => {
    
    return (
        <section className="seach_area text-center">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="heading">
                            <h2>I Grow By Helping People by Need </h2>
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
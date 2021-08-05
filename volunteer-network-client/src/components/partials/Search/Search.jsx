
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { allCategory } from '../../../redux/actions';

const Search = ({ allCategory }) => {

    const [search, setSearch] = useState('')

    const handleSearch = (e) => {
        const serachText = (e.target.value)
        setSearch(serachText)
    }



    useEffect(() => {
        if (search.length > 0) {
            axios.get('http://localhost:2400/search?filter=' + search)
                .then(res => {
                    allCategory(res.data)
                })


        } else {
            axios.get('http://localhost:2400/')
                .then(res => {
                    allCategory(res.data)
                })
        }

    }, [search])

    return (
        <section className="seach_area text-center">
            <Container>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <div className="heading">
                            <h2>I Grow By Helping People by Need </h2>
                        </div>
                        <div className="search">
                            <Form className="d-flex" >
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="mr-2"
                                    aria-label="Search"
                                    onChange={handleSearch}
                                />
                                <Button variant="primary" type="submit">Search</Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
const mapDispatchToProps = {
    allCategory
}

export default connect(null, mapDispatchToProps)(Search);
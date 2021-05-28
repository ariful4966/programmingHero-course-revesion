import React from 'react';
import { Card, Button } from 'react-bootstrap'

const News = (props) => {
    const { title, description, urlToImage } = props.news
    return (
        <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
         </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;
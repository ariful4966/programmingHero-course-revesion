import React from 'react';
import { Card, Button } from 'react-bootstrap';


const News = (props) => {
    const {title, description, content} = props.article
    return (
        <Card>
            <Card.Header as="h5">{content}</Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {description}
          </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    );
};

export default News;
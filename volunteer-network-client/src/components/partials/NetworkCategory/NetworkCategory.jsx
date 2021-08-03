import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import './NetworkCategory.css'
import CategoryItem from '../CategoryItem/CategoryItem';
import { allCategory } from '../../../redux/actions';
import { connect } from 'react-redux';


const NetworkCategory = (props) => {
    const { categoris, allCategory, colors } = props

    

    const randomColor = "#" + ((1 << 24) * Math.random() | 0).toString(16);
    return (
        <div className="category_area">
            <Container>
                <Row>
                    {
                        categoris.map(ct =>
                            <CategoryItem key={ct._id} ct={ct} rendom={randomColor} colors={colors}/>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

const mapStateToProps = state => {
    return state
}
const mapDispatchToProps = {
    allCategory
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkCategory);
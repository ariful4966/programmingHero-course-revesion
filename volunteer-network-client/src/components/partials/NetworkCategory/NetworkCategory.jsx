import React, { useState, useEffect, useReducer } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import './NetworkCategory.css'
import CategoryItem from '../CategoryItem/CategoryItem';
import { initialState, reducer } from '../../../Reducer/reactReducer';
import { allCategory } from '../../../Reducer/actions';


const NetworkCategory = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('http://localhost:2400/')
            .then(res => {
                const data = res.data
                dispatch(allCategory(data))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

   const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 
    return (
        <div className="category_area">
            <Container>
                <Row>
                    {
                        state.categoris.map(ct =>
                            <CategoryItem key={ct._id} ct={ct} rendom={randomColor}/>
                        )
                    }
                </Row>
            </Container>
        </div>
    );
};

export default NetworkCategory;
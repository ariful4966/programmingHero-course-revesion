import axios from 'axios';
import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import OrderForm from '../OrderForm/OrderForm';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const { orderId } = useParams();
    const { user, services } = useSelector(state => state);

    const selectService = services.find(service => service._id === orderId)

    const [picture, setPicture] = useState(null);
    const [order, setOrder] = useState({
        name: user.name,
        email: user.email,
        design: selectService.name,
        description: '',
        price: selectService.price,
        status: 'Pending'
    })


    const handleOrderBlur = e => {
        const newOrder = {
            ...order
        }
        newOrder[e.target.name] = e.target.value;
        setOrder(newOrder)
    }
    const handleOrderSubmit = e => {
        e.preventDefault();
        const postOrder = {
            ...order
        }
        postOrder.icon = selectService.icon
        postOrder.picture = picture

        axios.post('http://localhost:5000/order', postOrder)
            .then(data => {
                if(data.data){
                    alert('Yor Order has been post successfully')
                }
            })
    }
    // upload Image
    const handlePictureChange = event => {
        uploadScreenShort(event.target.files[0])
            .then(data => {
                setPicture(data.data.data.display_url);

            })
    }


    const uploadScreenShort = pic => {
        const screenShort = new FormData();
        screenShort.append('key', '9519a86f55d224381c6e2b5e13379f75')
        screenShort.append('image', pic)

        return axios({
            method: 'post',
            url: 'https://api.imgbb.com/1/upload/order',
            data: screenShort
        })
    }
    console.log(picture);

    return (

        <OrderForm handleOrderBlur={handleOrderBlur} handleOrderSubmit={handleOrderSubmit} handlePictureChange={handlePictureChange} order={order} />

    );
};

export default Order;
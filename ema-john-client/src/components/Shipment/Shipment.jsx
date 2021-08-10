import React, { useContext, useState } from 'react';
import { Button, Container, FormControl } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css'
import PaymentProcess from '../PaymentProcess/PaymentProcess'

const Shipment = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const [shippingData, setShippingData] = useState(null)
  const onSubmit = data => {
    setShippingData(data)
  };

  const handlePaymentSuccess = paymentId => {
    const savedCart = getDatabaseCart();
    const dateTime = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    }
    const ordersDetails = {
      products: savedCart,
      shipment: shippingData,
      paymentId,
      orderTime: dateTime
    };

    fetch('https://ema-john-server4082.herokuapp.com/addOrder', {
      method: 'POST',
      body: JSON.stringify(ordersDetails),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {

        if (data) {
          processOrder()
        }
      });

  }
  // watch input value by passing the name of it
  console.log(loggedInUser);
  return (
    <Container>
      <div className="shipment_area row">
        <div style={{ display: shippingData ? "none" : "block" }} className="shipment_item col-md-6">

          <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

            <FormControl defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">This field is required</span>}
            <FormControl defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">This field is required</span>}
            <FormControl {...register("address", { required: true })} placeholder="Your Address" />
            {errors.address && <span className="error">This field is required</span>}
            <FormControl defaultValue={loggedInUser.phoneNumber} {...register("phone", { required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span className="error">This field is required</span>}

            <Button type="submit" className="shipment-btn" >Submit</Button>
          </form>
        </div>
        <div className="shipment_item col-md-6" style={{ display: shippingData ? "block" : "none" }}>
          <PaymentProcess handlePayment={handlePaymentSuccess}/>
        </div>
      </div>
    </Container>
  );
};

export default Shipment;
import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import './Shipment.css'
import PaymentProcess from '../PaymentProcess/PaymentProcess'

const Shipment = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const onSubmit = data => {
    const savedCart = getDatabaseCart();
    const dateTime = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString()
    }
    const ordersDetails = { ...loggedInUser, products: savedCart, shipment: data, orderTime: dateTime };

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
          alert('Your Order Submit Successfully')
        }
      });

  };
  // watch input value by passing the name of it
  console.log(loggedInUser);
  return (
    <Container>
      <div className="shipment_area row">
        <div className="shipment_item col-md-6">

          <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

            <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your Name" />
            {errors.name && <span className="error">This field is required</span>}
            <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email" />
            {errors.email && <span className="error">This field is required</span>}
            <input {...register("address", { required: true })} placeholder="Your Address" />
            {errors.address && <span className="error">This field is required</span>}
            <input defaultValue={loggedInUser.phoneNumber} {...register("phone", { required: true })} placeholder="Your Phone Number" />
            {errors.phone && <span className="error">This field is required</span>}

            <input type="submit" className="shipment-btn" />
          </form>
        </div>
        <div className="shipment_item col-md-6">
          <PaymentProcess />
        </div>
      </div>
    </Container>
  );
};

export default Shipment;
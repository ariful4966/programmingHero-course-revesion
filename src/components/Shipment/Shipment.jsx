import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser]=useContext(UserContext)
    const onSubmit = data =>{
        console.log('form submited', data)
    };
  
    console.log(watch("example")); // watch input value by passing the name of it
  console.log(loggedInUser);
    return (
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
        
        <input defaultValue={loggedInUser.displayName} {...register("name", { required: true })} placeholder="Your Name"/>
        {errors.name && <span className="error">This field is required</span>}
        <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your Email"/>
        {errors.email && <span className="error">This field is required</span>}
        <input {...register("address", { required: true })} placeholder="Your Address"/>
        {errors.address && <span className="error">This field is required</span>}
        <input defaultValue={loggedInUser.phoneNumber} {...register("phone", { required: true })} placeholder="Your Phone Number"/>
        {errors.phone && <span className="error">This field is required</span>}
        
        <input type="submit" className="shipment-btn" />
      </form>
    );
};

export default Shipment;
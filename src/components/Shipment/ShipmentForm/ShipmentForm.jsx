import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Dataprovid } from "../../../App";

const ShipmentForm = () => {
    const { data } = useContext(Dataprovid)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = info => console.log(info);

    console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} value={ data.user.name} placeholder="Your Name" />
            {errors.name && <span>This field is required</span>} <br />
            <input {...register("email", { required: true })} value={ data.user.email} placeholder="Your Email Address" /><br />
            {errors.eamil && <span>This field is required</span>}
            <input {...register("phone", { required: true })}  placeholder="Your Phone Number" /><br />
            {errors.phone && <span>This field is required</span>}
            <input {...register("Village", { required: true })}  placeholder="" /><br />
            {errors.phone && <span>This field is required</span>}
            <input {...register("Camera", { required: true })}  placeholder=""/><br />
            {errors.phone && <span>This field is required</span>} 
            <input {...register("State", { required: true })}  placeholder="Your Phone Number" /><br />
            {errors.phone && <span>This field is required</span>}

            <input type="submit" />
        </form>
    );
}

export default ShipmentForm;
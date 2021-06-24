
import React from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Dataprovid } from "../../App";

const ShipmentForm = () => {
    const { data, setData } = useContext(Dataprovid)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = info => {
        console.log(info);
        const shipmentInfo = {
            name: info.name,
            email: info.email,
            phone: info.phone,
            village: info.village,
            city: info.city,
            state: info.state,
            message: info.message,
            isDone: true
        }
        setData({ ...data, shipment: shipmentInfo })
        info.name = ''
    };
    console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true })} value={data.user.name} placeholder="Your Name" />
            {errors.name && <span>This field is required</span>} <br />
            <input {...register("email", { required: true })} value={data.user.email} placeholder="Your Email Address" /><br />
            {errors.eamil && <span>This field is required</span>}
            <input {...register("phone", { required: true })} placeholder="Your Phone Number" /><br />
            {errors.phone && <span>This field is required</span>}
            <input {...register("village", { required: true })} placeholder="Village or Road no" /><br />
            {errors.village && <span>This field is required</span>}
            <input {...register("city", { required: true })} placeholder="Your city name" /><br />
            {errors.city && <span>This field is required</span>}
            <input {...register("state", { required: true })} placeholder="Your State" /><br />
            {errors.state && <span>This field is required</span>}
            <textarea {...register("message")} cols="30" rows="10" placeholder="Type simple message (optional)"></textarea>

            <input type="submit" className="btn btn-bg" />
        </form>
    );
}

export default ShipmentForm;
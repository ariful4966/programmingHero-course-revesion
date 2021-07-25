import { TextField, TextareaAutosize, Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import './ContactForm.scss'

export default function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)} className="contact_form">
      <input fullWidth={true} {...register("email", { required: true })} placeholder="Your Email" />
      {errors.email && <span>This field is required</span>}
      <input fullWidth={true} {...register("subject", { required: true })} placeholder="Subject" />
      {errors.subject && <span>This field is required</span>}<br />
      <textarea minRows={5} className="form_area" {...register("comments", { required: true })} >Message</textarea>
      <Button variant="contained" type="submit" id="gradient_btn" className="form_btn">Submit</Button>
    </form>
  );
}
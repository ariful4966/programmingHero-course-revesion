import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        width: '700px',
        padding: '30px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '5',
        textAlign: 'center'
    },
};
Modal.setAppElement('#root');

const AppoinmentForm = ({ modalIsOpen, afterOpenModal, closeModal, booking, date }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = booking.subject;
        data.date = date;
        data.created = new Date();

        fetch('http://localhost:5000/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal()
                    alert('Appointment Created  Successfully')
                }
            })

    };

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-brand">{booking.subject}</h2>
                <p className="text-secondary text-center">ON {new Date(date).toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)} className="p-5 text-start">
                    <input className="form-control mb-3" placeholder="Your Name" {...register("name", { required: true })} />
                    {errors.name && <span className="text-danger">This field is required</span>}
                    <input className="form-control mb-3" placeholder="Phone Number" {...register("phone", { required: true })} />
                    {errors.phone && <span className="text-danger">This field is required</span>}
                    <input className="form-control mb-3" placeholder="Email" {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">This field is required</span>}
                    <div class=" mb-3 row">
                        <div className="col-md-4">
                            <select class="form-select" {...register("gender")}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                            {errors.gender && <span>Select Your Gender</span>}
                        </div>
                        <div className="col-md-4">
                            <input type="text" class="form-control" placeholder="Your Age" {...register("age", { required: true })} />
                            {errors.age && <span className="text-danger">This field is required</span>}
                        </div>
                        <div className="col-md-4">
                            <input type="text" class="form-control" placeholder="Weight" {...register("weight", { required: true })} />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>
                    <button className="btn ms-auto d-block" type="submit">Send</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;
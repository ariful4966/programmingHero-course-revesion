import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
        width: '500px',
        padding:'30px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const AppoinmentForm = ({ modalIsOpen, afterOpenModal, closeModal, booking }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

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
                <button onClick={closeModal}>close</button>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control mb-3" {...register("seletceTime", { required: true })} />
                    {errors.seletceTime && <span>This field is required</span>}
                    <input className="form-control mb-3" {...register("name", { required: true })} />
                    {errors.name && <span>This field is required</span>}
                    <input className="form-control mb-3" {...register("phone", { required: true })} />
                    {errors.phone && <span>This field is required</span>}
                    <input className="form-control mb-3" {...register("email", { required: true })} />
                    {errors.email && <span>This field is required</span>}
                    <input className="form-control mb-3" {...register("Date", { required: true })} />
                    {errors.Date && <span>This field is required</span>}

                    <button className="btn ms-auto d-block" type="submit">Send</button>
                </form>
            </Modal>
        </div>
    );
};

export default AppoinmentForm;
import React from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import { patientReducer, patientState } from '../Reducers/patientReducer';

const PatientManagement = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(patientReducer, patientState)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        console.log(nameRef.current.value);
        nameRef.current.value = ''
    }
    return (
        <div>
            <h1>Doctor Manage the Patient {state.patients.length}</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} />
            </form>
            {
                state.patients.map(pt => <li
                    key={pt.id}
                    onClick={() => dispatch({ type: 'REMOVE_PATIENT', id: pt.id })}
                >{pt.name}</li>)
            }
        </div>
    );
};

export default PatientManagement;
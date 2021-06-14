import React from 'react';
import { useRef } from 'react';
import { useReducer } from 'react';
import { reducer } from '../Reducer/reducer';


export const patientState = {
    patients: []
}

const PatientReducer = () => {
    const nameRef = useRef()
    const [state, dispatch] = useReducer(reducer, patientState);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_PATIENT',
            name: nameRef.current.value,
            id: state.patients.length + 1
        })
        console.log(nameRef.current.value);
    }

    return (
        <div>
            <h1>Manage Doctor Chamber {state.patients.length}</h1>
            <form action="" onSubmit={handleSubmit} >
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

export default PatientReducer;
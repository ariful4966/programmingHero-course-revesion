import React from 'react';
import { useReducer } from 'react';
import { reducer } from '../Reducer/reducer';

const initialState = { count: 0 }

const ReducerCount = () => {

    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>This is a Reducer Count: {state.count}</h1>
            <button onClick={() => dispatch({ type: 'DICREMENT' })}>Dicrement</button>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        </div>
    );
};

export default ReducerCount;
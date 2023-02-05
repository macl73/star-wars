import React from 'react';
import { useDispatch } from 'react-redux';
import { number } from '../slices/number.js';

export default function InputNumber() {

    const dispatch = useDispatch();

    const handleChange = e => {
        dispatch(number(e.target.value));
    };

    return (
        <>
            <label htmlFor="number">Generate facts about Star Wars</label>
            <input onChange={e => handleChange(e)} type="number" name="number" min='1' max='5' />
        </>        
    );
};

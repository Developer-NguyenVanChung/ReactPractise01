import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

NumberLucky.propTypes = {

};

function NumberLucky(props) {
    const [numberLucky, setNumberLucky] = useState('')
    const handleNumberLucky = () => {
        setNumberLucky(Math.floor(Math.random() * 100))
    }
    return (
        <div className="mt-4 border border-danger p-1">
            <h4>Con số may mắn của bạn là gì?</h4>
            <h3 className="text-danger">{numberLucky}</h3>
            <button className="btn btn-info" onClick={handleNumberLucky}>Bấm để xem ngay!</button>
            <RadioInput />
        </div>
    );
}

export default NumberLucky;
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RadioInput from '../NewTest/RadioInput';

ChangeNumber.propTypes = {
};

function ChangeNumber(props) {
    const [number, setNumber] = useState(0)

    const handelInceament = () => {
        setNumber(prev => prev >= 0 ? prev + 1 : 0)
    }

    const handelDecreament = () => {
        setNumber(prev => prev > 0 ? prev - 1 : 0)
    }
    const priceProduct1 = '12.000 vnd'
    return (
        <div className="container">
            <h3 className="text-primary">Value of current: {number}</h3>
            <button className="btn btn-success mr-3" onClick={handelInceament}>Increament + </button>
            <button className="btn btn-danger" onClick={handelDecreament}>Decreament - </button>
            {/* <RadioInput /> */}
        </div>
    );
}

export default ChangeNumber;
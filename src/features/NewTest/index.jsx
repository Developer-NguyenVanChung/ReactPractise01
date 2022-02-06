import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NumberLucky from './NumberLucky';
import FormTest from './FormTest';
import './style.css'
import RadioInput from './RadioInput';

NewTest.propTypes = {

};


function NewTest() {
    const [result, setResult] = useState('')
    const gifts = [
        'The cao 100k',
        'Vé xem phim 3D',
        'Iphone13',
        'Chuc ban may man lan sau',
        'The cao 20k',
        'Chuc ban may man lan sau',
        'Tai nghe Sony',
        'Chuc ban may man lan sau',
        'Chuc ban may man lan sau',
        'Máy đun nước siêu tốc 2L',
        'Tủ lạnh Panasonic 150L'
    ]
    const handleGetGifts = () => {
        const value = Math.floor(Math.random() * gifts.length);
        setResult(gifts[value])
    }
    return (
        <div className="container mb-5">
            <RadioInput />
            <FormTest />
            <h3>{result || 'Bạn chưa có phần thưởng nào!'}</h3>
            <button className="btn btn-primary" onClick={handleGetGifts}>Lay thuong ngay</button>
            <NumberLucky />
        </div>
    );
}

export default NewTest;
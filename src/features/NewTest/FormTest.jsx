import React, { useState } from 'react';
import PropTypes from 'prop-types';

FormTest.propTypes = {

};

function FormTest(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const handelSubmit = () => {
        console.log({ name, email });
        setName('Nguyen Van Nam 11')

    }


    return (
        <div className='mb-3 p-3 border border-primary'>
            <h3>Register account</h3>
            <input
                value={name}
                type="text" name="name" id="name"
                onChange={e => setName(e.target.value)}
                placeholder='Nhập họ tên của bạn...'
            />
            <input type="number" name="age" id="age"
                value={email}
                placeholder='Nhập tuổi của bạn...'
                onChange={e => setEmail(e.target.value)}
            />

            <input type="submit" value="Register" onClick={handelSubmit} />

            <div className="result bg-info text-white">
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default FormTest;
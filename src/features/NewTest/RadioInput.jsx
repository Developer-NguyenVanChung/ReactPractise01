import React, { useState } from 'react';
import PropTypes from 'prop-types';

RadioInput.propTypes = {

};
const lessons = [
    {
        id: 1,
        name: 'HTML,CSS',
        price: '800000'
    },
    {
        id: 2,
        name: 'Javascript',
        price: '1400000'
    },
    {
        id: 3,
        name: 'React Js',
        price: '950000'
    },
]

function RadioInput(props) {
    const [checked, setChecked] = useState(2)
    console.log(checked);

    const handelSubmitRadio = () => {
        console.log({ id: checked });
    }

    return (
        <div className='border border-info mb-3 p-2'>
            {lessons.map(lesson => (
                <div className='form-group' key={lesson.id}>
                    <input
                        type="radio"
                        id={lesson.id}
                        checked={lesson.id === checked}
                        onChange={() => setChecked(lesson.id)}
                    />
                    <label htmlFor={lesson.id}>{lesson.name}</label>
                </div>
            ))}

            <input type="submit" value="Select" onClick={handelSubmitRadio} />
        </div>
    );
}

export default RadioInput;
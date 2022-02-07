import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Đếm ngược
CountDown.propTypes = {

};

function CountDown(props) {
    const [countDown, setCountDown] = useState(180)

    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         setCountDown(countDown - 1)
    //     }, 1000)
    //     console.log(timerId);
    //     return () => {
    //         clearInterval(timerId)
    //     }
    // }, [countDown])

    return (
        <div className='border border-danger p-1 mb-2'>
            <h5>Đồng hồ đếm ngược: {countDown} </h5>
        </div>
    );
}

export default CountDown;
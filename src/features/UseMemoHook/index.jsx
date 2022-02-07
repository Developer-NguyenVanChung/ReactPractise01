import React, { useState } from 'react';
import PropTypes from 'prop-types';
import OtherContent from './OtherContent';

UseMemoHook.propTypes = {

};

function UseMemoHook(props) {
    const [number, setNumber] = useState(10)

    const handleRun = () => {
        setInterval(() => {
            setNumber(prev => prev === 0 ? 0 : prev - 1)
        }, 1000);
    }

    return (
        <div className='border border-primary p-1 mb-3'>
            <h5 className="text-primary">Use 'Usememo hook' in ReactJS</h5>
            <p className="text-danger border-bottom border-danger text-center">{number}</p>
            <button className="btn btn-outline-primary" onClick={handleRun}>Run</button>

            <OtherContent />
        </div>
    );
}

export default UseMemoHook;
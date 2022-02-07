import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

WidthOfWindow.propTypes = {

};

function WidthOfWindow(props) {
    const [width, setWidth] = useState(window.innerWidth)
    const [height,setHeight] = useState(window.innerHeight)

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize) 

        // Cleanup Function
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    }, [])

    return (
        <div className='border border-danger mb-2 p-1'>
            <h5>Độ rộng của cửa sổ trình duyệt là: {width}px</h5>
            <h5>Chiều cao của cửa sổ trình duyệt là: {height}px</h5>
        </div>
    );
}

export default WidthOfWindow;
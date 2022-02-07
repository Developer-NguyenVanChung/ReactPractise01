import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css'

GoToTopButton.propTypes = {

};

function GoToTopButton(props) {
    const [showButtonGoToTop, setShowButtonGoToTop] = useState(false)

    useEffect(() => {
        const handelShowButton = () => {
            if (window.scrollY >= 400) {
                setShowButtonGoToTop(true)
            } else {
                setShowButtonGoToTop(false)
            }
        }
        window.addEventListener('scroll', handelShowButton)

        // Cleanup Function
        return () => {
            window.removeEventListener('scroll', handelShowButton)
        }
    }, [])
    const handletoTOP = () => {
        window.scrollY = 0
    }
    return (
        <div>
            {showButtonGoToTop && <button className='btn btn-info btnShowToTop' onClick={handletoTOP}>^ Back to top</button>}
        </div>
    );
}

export default GoToTopButton;
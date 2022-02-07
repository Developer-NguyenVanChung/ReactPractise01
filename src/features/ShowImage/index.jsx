import React, { useState } from 'react';
import PropTypes from 'prop-types';

ShowImage.propTypes = {

};

function ShowImage(props) {
    const [image, setImage] = useState()
    const [image2, setImage2] = useState()

    const handleChangeImage = (e) => {
        const file = e.target.files[0]
        const file2 = e.target.files[1]
        setImage(URL.createObjectURL(file))
        setImage2(URL.createObjectURL(file2))
    }

    return (
        <div className='border border-info p-1 mb-3'>
            <h5>Select and Show image of your.</h5>
            <input type="file" name="image" id="image" multiple onChange={handleChangeImage} /><br />
            <img src={image} width='55%' alt="Image that you selected." />
            <img src={image2} width='55%' alt="Image that you selected." />
        </div>
    );
}

export default ShowImage;
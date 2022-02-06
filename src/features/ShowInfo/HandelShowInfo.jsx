import React from 'react';
import PropTypes from 'prop-types';

HandelShowInfo.propTypes = {

};

function HandelShowInfo({ item }) {
    return (
        <div >
            <p>{item.fullname}</p>
            <p>{item.age}</p>
            <p>-********************</p>
        </div>
    );
}

export default HandelShowInfo;
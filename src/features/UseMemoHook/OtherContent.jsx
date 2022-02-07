import React, { memo } from 'react';
import PropTypes from 'prop-types';

OtherContent.propTypes = {

};

function OtherContent(props) {
    return (
        <div>
            <h5>This file contain other of contents</h5>
            {console.log('re-render')}
        </div>
    );
}

export default memo(OtherContent);
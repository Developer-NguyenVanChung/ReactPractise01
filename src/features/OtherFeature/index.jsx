import React from 'react';
import PropTypes from 'prop-types';

OtherFeature.propTypes = {
    
};

function OtherFeature({dataNew}) {
    // console.log('data at OtherFeature',dataNew);
    return (
        <div className='border border-info p-1 mb-4'>
            <h5>Dùng dữ liệu ở nơi khác  - Use data from other components</h5>

        </div>
    );
}

export default OtherFeature;
import React from 'react';
import PropTypes from 'prop-types';

HandelData.propTypes = {

};

function HandelData({ info, info2 }) {
    console.log('info: ', info);
    console.log('info2: ', info2);

    return (
        <>
            <ul>
                <li>{info.phoneName}</li>
                <li>{info.price}</li>
                <li>{info.brand}</li>
            </ul>
            <div className="bg-succcess">
                {
                    info2.map(item => (
                        <ul key={item.id}>
                            <li>{item.first_name}</li>
                            <li>{item.last_name}</li>
                            <li>{item.email}</li>
                            <li>{item.gender}</li>
                            <li>----------------------</li>
                        </ul>
                    ))
                }
            </div>
        </>
    );
}

export default HandelData;
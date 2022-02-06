import React from 'react';
import PropTypes from 'prop-types';
import HandelShowInfo from './HandelShowInfo';

ShowInfo.propTypes = {
    
};

function ShowInfo({props}) {
    // console.log(props);
    return (
        <div>
            {
                props.map(item => (
                    // <div>
                    //     <p>{item.fullname}</p>
                    //     <p>{item.age}</p>
                    //     <p>----------------------</p>
                    // </div>
                    <HandelShowInfo item = {item} key={item.id}/>
                ))
            }
        </div>
    );
}

export default ShowInfo;
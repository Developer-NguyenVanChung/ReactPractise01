import React from 'react';
import PropTypes from 'prop-types';

ShowProduct.propTypes = {

};

function ShowProduct({ data2 }) {
    console.log('data2: ', data2);
    return (
        <div className="container">
            <div className="row">
                {data2.map(item => (
                    <div className="card col-sm-6 col-md-4 col-lg-3 p-1" key={item.id} >
                        <img src="..." className="card-img-top" alt="image" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="/home" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default ShowProduct;

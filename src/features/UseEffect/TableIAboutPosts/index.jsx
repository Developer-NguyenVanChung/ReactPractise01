import React from 'react';
import PropTypes from 'prop-types';

TableAboutPosts.propTypes = {

};

function TableAboutPosts({ dataFromFather }) {
    // console.log('dataFromFather', dataFromFather);
    return (
        <div>
            <h5>This is Table about posts</h5>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                    {dataFromFather.map(item => {
                        if (item.id < 11) {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                </tr>
                            )
                        }
                    }
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default TableAboutPosts;
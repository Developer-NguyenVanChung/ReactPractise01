import React from 'react';
import PropTypes from 'prop-types';

TableUsers.propTypes = {

};

function TableUsers({ dataUsers }) {
    return (
        <div className='border border-danger p-1'>
            <h5 className='text-primary'>This is table about User of information</h5>
            <table className="table-hover table table-responsive">
                <thead>
                    <tr>
                        <th scope='col'>Id</th>
                        <th scope='col'>Name</th>
                        <th scope='col'>Username</th>
                        <th scope='col'>Emaikl</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUsers.map(userItem => (
                        <tr key={userItem.id}>
                            <th scope='row'>{userItem.id}</th>
                            <td>{userItem.name}</td>
                            <td>{userItem.username}</td>
                            <td>{userItem.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableUsers;
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

TabsWithApi.propTypes = {

};
const tabs = ['posts', 'comments', 'albums', 'users', 'photos']

function TabsWithApi(props) {
    const [type, setType] = useState('posts')
    const [info, setInfo] = useState([])
    console.log(type);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(data => setInfo(data))
        return () => { };
    }, [type]);

    return (
        <div className='border border-warning mb-3 p-1'>
            <h5>Tabs with Api change</h5>
            {tabs.map(tab => (
                <button
                    className="btn btn-outline-info m-1"
                    key={tab}
                    style={type === tab ? { color: 'red', backgroundColor: 'yellow' } : {}}
                    onClick={() => setType(tab)}
                >{tab}
                </button>
            ))}
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>name</th>
                        <th>body</th>
                        <th>email</th>
                        <th>photo</th>
                    </tr>
                </thead>
                <tbody>
                    {info.map(item => {
                        if (item.id <= 5) {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.name || 'not found'}</td>
                                    <td>{item.body}</td>
                                    <td>{item.email}</td>
                                    <td><img src={item.thumbnailUrl} alt="Ảnh - image" /></td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TabsWithApi;
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import TableAboutPosts from './TableIAboutPosts';
import TableUsers from './TableUsers';
import OtherFeature from '../OtherFeature';

UseEffectFeature.propTypes = {

};

function UseEffectFeature(props) {
    const [title, setTitle] = useState('')
    const [postList, setPostList] = useState([])
    const [user, setUser] = useState([])

    // Change title of page 
    useEffect(() => {
        document.title = title
        return () => {
        };
    });

    // Call Api from Server (Post list)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(respon => respon.json())
            .then(data => setPostList(data))
    }, [])

    // Call API from to get Data about User infomation
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(userData => setUser(userData))
    }, [])


    return (
        <>
            <div className='border border-danger mb-4 p-1'>
                <h5>Thực hành UseEffect</h5>
                <input onChange={e => setTitle(e.target.value)} value={title} type="text" name="title" id="title" placeholder='Nhập tiêu đề trang...' />
            </div>
            <OtherFeature dataNew = {user} />
            <TableUsers dataUsers = {user} />

            <TableAboutPosts dataFromFather={postList} />

            <div className="border border-info mb-4">
                <ul>
                    {postList.map(postItem => (
                        <li key={postItem.id} className='mb-3'>
                            <span>Id: {postItem.id}</span><br />
                            <span><span className='text-danger'>Summary</span>: {postItem.body}</span> <br />
                            <a href='/'>Title: {postItem.title}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </>
    );
}

export default UseEffectFeature;
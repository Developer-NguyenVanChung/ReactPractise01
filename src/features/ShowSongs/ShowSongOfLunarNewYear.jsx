import React from 'react';
import PropTypes from 'prop-types';

ShowSongOfLunarNewYear.propTypes = {

};

function ShowSongOfLunarNewYear({ data }) {
    // console.log('data', data);
    return (
        <div className="row">
            <h3 className="text-danger mt-1 mb-3">Nghe vào ngày Tết</h3>
            {data.map(song => (
                <div className="card col-sm-6 col-md-4 col-lg-3 p-3" key={song.id}>
                    <img src={song.img} className="card-img-top" style={{ width: "90%" }} alt={song.name} />
                    <div className="card-body">
                        <h5 className="card-title">{song.name}</h5>
                        <p className="card-text">{song.description}</p>
                        <a href="https://zingmp3.vn/video-clip/Tup-Leu-Vang-Nguyen-Dinh-Vu-ACV/ZUZBBOFF.html" className="btn btn-primary text-center">Nghe</a>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ShowSongOfLunarNewYear;
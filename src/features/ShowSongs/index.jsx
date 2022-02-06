import React from 'react';
import PropTypes from 'prop-types';
import ShowSongOfLunarNewYear from './ShowSongOfLunarNewYear';

ShowSongs.propTypes = {

};

function ShowSongs({ run, dataOfSongs, dataofSongs2 }) {
    // console.log('dataofSongs2', dataofSongs2);
    
    return (
        <div className="container" >
            <ShowSongOfLunarNewYear data={dataofSongs2} />

            <h3 className="text-primary mt-5 mb-1">Những bài hát Hot nhất Bảng xếp hạng</h3>
            <div className="row">
                {dataOfSongs.map(song => (
                    <div className="card col-sm-6 col-md-4 col-lg-3 p-1" key={song.id}>
                        <img src={song.thumbnailUrl} style={{ width: "100%" }} className="card-img-top" alt={song.title} />
                        <div className="card-body">
                            <h5 className="card-title">{song.title}</h5>
                            <p className="card-text"></p>
                            <a href="https://zingmp3.vn/video-clip/Tup-Leu-Vang-Nguyen-Dinh-Vu-ACV/ZUZBBOFF.html" className="btn btn-primary">Nghe</a>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    );
}

export default ShowSongs;
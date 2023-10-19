/* eslint-disable react/prop-types */






export const Song = ({ detailSong, id, handlePlayList, langList, setCount }) => {
    // console.log(setCount);

    return (
        <li onClick={() => {
            handlePlayList(langList);
            setCount(id);
        }}>
            <div className="sl-no">
                <p>{id + 1}</p>
            </div>
            <div className="img-logo">
                <img src={detailSong.poster} alt="" />
            </div>
            <div className="song-sm-title">
                <p>{detailSong.title}</p>
            </div>
            <div className="play-btn-box" >
                <i className="fa-solid fa-play"></i>
            </div>
        </li>
    )
}

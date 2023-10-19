/* eslint-disable react/prop-types */



export const MusicPlayer = ({ handleNext, handlePrevious, handlePlayPause, playList, count, playing }) => {

    return (
        <div className="muisc-player">
            <div className="player-header">
            </div>
            <div className="player-body">
                <div className="img">
                    <img src={playList[count].poster} alt="..." />
                </div>
                <div className="song-title">
                    <h4>{playList[count].title}</h4>
                    <p>{playList[count].album}</p>
                </div>
            </div>
            <div className="player-footer">
                <div className="icon-btn">
                    {!playList[count].favourite ? <i className="fa-regular fa-heart"></i> : <i className="fa-solid fa-heart"></i>}
                </div>
                <div className="icon-btn" onClick={() => { handlePrevious() }}>
                    <i className="fa-solid fa-backward-step"></i>
                </div>
                <div className="icon-btn" onClick={() => { handlePlayPause() }}>
                    {!playing ? <i className="fa-solid fa-play"></i> : <i className="fa-solid fa-pause">
                    </i>}
                </div>
                <div className="icon-btn" onClick={() => { handleNext() }}>
                    <i className="fa-solid fa-forward-step"></i>
                </div>
                <div className="icon-btn" title={playList[count].title} >
                    <a target="blank" href={playList[count].url}>
                        <i className="fa-solid fa-circle-arrow-down"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

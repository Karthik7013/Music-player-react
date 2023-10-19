

export const Card = ({ details, id, handlePlayList, topPlayList, setCount }) => {
    // console.log(
    //     {
    //         details: details,
    //         id: id,
    //         handlePlayList: handlePlayList,
    //         TopPlayList: TopPlayList,
    //         setCount: setCount
    //     }
    // )

    return (
        <div className="card" onClick={() => { handlePlayList(topPlayList); setCount(id) }}>
            <div className="img-song">
                <img src={details.poster} alt="" />
            </div>
            <div className="song-name">
                <p>{details.title}</p>
                <p className='light'>{details.album}</p>
            </div>
        </div>
    )
}

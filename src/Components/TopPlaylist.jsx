
import { useEffect, useState } from 'react';
import { Card } from './Card';
import SongList from "../data.json"
export const TopPlaylist = ({ handlePlayList, setCount }) => {

    let [TopPlayList, setTopPlayList] = useState();

    useEffect(() => {
        setTopPlayList(SongList.filter((e) => e.language === 'telugu'))
    }, [])




    return (
        <div className="today-list">
            <div className="playlist-header">
                <h4>Popular</h4>
                <p></p>
            </div>
            <div className="card-container">
                {TopPlayList && TopPlayList.map((e, index) => <Card
                    key={index}
                    details={e}
                    id={index}
                    handlePlayList={handlePlayList}
                    topPlayList={TopPlayList}
                    setCount={setCount} />)}
            </div>
        </div>
    )
}

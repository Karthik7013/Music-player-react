/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { TopPlaylist } from './TopPlaylist';
import { Song } from './Song';

import songsDB from "../data.json";


export const MusicContainer = ({ handlePlayList, setCount }) => {
    let [langList, setLangList] = useState();

    useEffect(() => {
        let filter = songsDB.filter((e) => e.language === 'telugu');
        setLangList(filter);
    }, [])

    function handleLanguageSong(lang) {
        let filter = songsDB.filter((e) => e.language === lang);
        setLangList(filter);
    }

    return (
        <div className="music-container">
            <TopPlaylist handlePlayList={handlePlayList} setCount={setCount} />
            <div className="widgets">
                <div className="language">
                    <div className="song-header">
                        <p>Language</p>
                        <p></p>
                    </div>
                    <ul>
                        <li className='lang-card tel' onClick={() => { handleLanguageSong("telugu") }}>Telugu</li>
                        <li className='lang-card bol' onClick={() => { handleLanguageSong("hindi") }}>Hindi</li>
                        <li className='lang-card tam' onClick={() => { handleLanguageSong("tamil") }}>Tamil</li>
                        <li className='lang-card eng' onClick={() => { handleLanguageSong("english") }}>English</li>
                    </ul>
                </div>
                <div style={{ width: "100%" }} className='lang-songs'>
                    <>
                        <div className="song-header">
                            <p style={{ textTransform: "capitalize" }}>Top Picks</p>
                            <p></p>
                        </div>
                        <ul className="">
                            {langList && langList.map((e, index) => <Song key={index}
                                detailSong={e}
                                id={index}
                                handlePlayList={handlePlayList}
                                setCount={setCount}
                                langList={langList} />)}
                        </ul>
                    </>
                </div>
            </div>
        </div>
    )
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { Discover } from './Discover';
import { Header } from './Header';
import { MainBody } from './MainBody';
import { Routes, Route } from 'react-router-dom';
import bgImg from "../bg2.jpg";
import SongsAPI from "../data.json"



let dx = "https://picsum.photos/300/200";
export const Body = ({ setDisplayNav }) => {

    let audioTag = useRef(null);

    let [count, setCount] = useState(0);

    let [playList, setPlayList] = useState(SongsAPI);

    let [playing, setPlaying] = useState(false);

    useEffect(() => {
        let filterArray = SongsAPI.filter((e) => e.language === 'telugu');
        setPlayList(filterArray);
    }, [])

    function handleNext() {
        if (count < playList.length - 1) {
            setCount(++count)
        } else {
            setCount(0);
        }
        // audioTag.current && audioTag.current.play()
        if (audioTag.current !== undefined) {
            console.log(audioTag.current);
        }
        // console.log(audioTag.current);
        // setPlaying(true);
    }

    function handlePrevious() {
        if (count > 0) {
            setCount(--count);
        }
        else {
            setCount(playList.length - 1);
        }
        console.log(audioTag.current);
        // audioTag.current.play();
        // setPlaying(true);
    }


    function handlePlayPause() {
        if (audioTag.current !== null) {
            if (playing) {
                setPlaying(false);
                audioTag.current.pause();
            }
            else {
                setPlaying(true)
                audioTag.current.play();
            }
            // console.log(audioTag.current);
        }

    }

    function handlePlayList(playList) {
        setPlayList(playList)
    }



    // console.log(count);

    return (
        <div className="body" style={{ backgroundImage: `url(${bgImg})` }}>
            <Header setDisplayNav={setDisplayNav} />
            <audio
                src={playList[count].url}
                ref={audioTag}></audio>
            <Routes>
                <Route
                    path='/'
                    element={
                        <MainBody
                            handleNext={handleNext}
                            handlePrevious={handlePrevious}
                            handlePlayPause={handlePlayPause}
                            playList={playList}
                            count={count}
                            playing={playing}
                            handlePlayList={handlePlayList}
                            setCount={setCount}
                        />
                    }
                />

                <Route path="/search" element={<h1>Search</h1>} />
                <Route path="/discover" element={<Discover />} />
            </Routes>
            <div className="overlay">
            </div>
        </div >
    )
}

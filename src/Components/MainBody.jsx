



import { HeroBanner } from "./HeroBanner";
import { MusicPlayer } from './MusicPlayer';
import { MusicContainer } from './MusicContainer';



export const MainBody = ({ handleNext, handlePrevious, handlePlayPause, playList, count, playing, handlePlayList, setCount }) => {

    return (
        <>
            <div className="main-body">
                <HeroBanner />
                <div className="music">
                    <MusicContainer
                        handlePlayList={handlePlayList}
                        setCount={setCount} />
                    <MusicPlayer
                        handleNext={handleNext}
                        handlePrevious={handlePrevious}
                        handlePlayPause={handlePlayPause}
                        playList={playList}
                        count={count}
                        playing={playing} />
                </div>
            </div>
        </>
    )
}

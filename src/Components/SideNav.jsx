import home from "../home1.svg";
import discover from "../discover.svg";
import search from "../search.svg";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const SideNav = ({ displayNav }) => {
    let toggle = { minWidth: "200px" };
    let visible = { maxWidth: "0px", minWidth: "0px", overflow: "hidden" }


    function handleNextSong() {

    }


    return (
        <div className="side-nav" style={!displayNav ? toggle : null}>
            <div className="top">
                <div className="hero-logo">
                </div>
                <ul>

                    <Link to={"/"}>
                        <li className='active'>
                            <div className="nav-icon">
                                <img src={home} alt="" />
                            </div>
                            <h4 style={displayNav ? visible : null}>Home</h4>
                        </li>
                    </Link>
                    <Link to="/search">
                        <li>
                            <div className="nav-icon">
                                <img src={search} alt="" />
                            </div>
                            <h4 style={displayNav ? visible : null}>Search</h4>
                        </li>
                    </Link>
                    <Link to="/discover">
                        <li >
                            <div className="nav-icon">
                                <img src={discover} alt="" />
                            </div>
                            <h4 style={displayNav ? visible : null}>Discover</h4>

                        </li>
                    </Link>


                </ul>
            </div>
            <div className="bottom">
                <button onClick={handleNextSong}>Next Song</button>
            </div>
        </div>
    )
}

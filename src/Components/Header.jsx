import React from 'react';
import search from "../search.svg";
import menu from "../menu.svg"

export const Header = ({ setDisplayNav }) => {
    // console.log(setDisplayNav);

    return (
        <div className="header">
            <div className='left'>
                <div className="menu" onClick={() => { setDisplayNav((state) => !state) }}>
                    <img src={menu} alt="" />
                </div>
            </div>
            <div className="search-bar" >
                <div className="input">
                    <input type="text" />
                    <div className="search-box">
                        <img src={search} alt="" />
                    </div>
                </div>
            </div>
            <div className='right'>
                <div className='avatar'>
                    <img src="https://picsum.photos/200/200" alt="" />
                </div>
            </div>
        </div >
    )
}

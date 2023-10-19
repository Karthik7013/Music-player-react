import React from 'react';
import { createContext } from 'react';
import SongsDB from "../data.json"
export const SongsData = createContext();
export const SongsProvider = ({ children }) => {

    return (
        <SongsData.Provider value={SongsDB}>{children}</SongsData.Provider>
    )
}

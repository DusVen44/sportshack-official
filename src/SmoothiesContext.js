import React, { createContext, useState, useEffect } from 'react';
import config from './config';

export const SmoothiesContext = createContext();

const SmoothiesContextProvider = (props) => {
    const [smoothies20, setSmoothies20 ] = useState([]);
    const [smoothies32, setSmoothies32 ] = useState([]);

    useEffect(() => {
      Promise.all([
        fetch(`${config.API_ENDPOINT}/api/smoothies20`),
        fetch(`${config.API_ENDPOINT}/api/smoothies32`)
      ])
        .then(([res20, res32]) => {
            if (!res20.ok)
                return res20.json().then(e => Promise.reject(e));
            if (!res32.ok)
                return res32.json().then(e => Promise.reject(e));
        })
        .then(([res20, res32]) => {
            setSmoothies20({
                smoothies20: res20
            })
            setSmoothies32({
                smoothies32: res32
            })
        })
        .catch(error => {
            alert("Could not load smoothies", error)
            console.log(error)
        })
    }, [setSmoothies20, setSmoothies32]);

    return (
        <SmoothiesContext.Provider value={{smoothies20}}>
            {props.children}
        </SmoothiesContext.Provider>
    )
};

export default SmoothiesContextProvider;
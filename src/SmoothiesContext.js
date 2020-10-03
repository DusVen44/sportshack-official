import React, { createContext, useState, useLayoutEffect } from 'react';
import config from './config';

export const SmoothiesContext = createContext();

const SmoothiesContextProvider = (props) => {
    const [smoothies20, setSmoothies20 ] = useState([]);
    const [smoothies32, setSmoothies32 ] = useState([]);
    // const [loading, setLoading] = useState(false);

    useLayoutEffect(() => {
      Promise.all([
        fetch(`${config.API_ENDPOINT}/api/smoothies20`),
        fetch(`${config.API_ENDPOINT}/api/smoothies32`)
      ])
        .then(([res20, res32]) => {
            if (!res20.ok)
                return res20.json().then(e => Promise.reject(e));
            if (!res32.ok)
                return res32.json().then(e => Promise.reject(e));

            return Promise.all([res20.json(), res32.json()])
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
            alert("Could not load the list of smoothies. Please refresh page to try again.", error)
        })
    }, [setSmoothies20, setSmoothies32]);

    return (
        <SmoothiesContext.Provider value={{smoothies20, smoothies32}}>
            {props.children}
        </SmoothiesContext.Provider>
    )
};

export default SmoothiesContextProvider;
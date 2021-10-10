import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'

export default function Videos() {
    const URL = "https://www.googleapis.com/youtube/v3/videos"
    const apiKey = `${process.env.REACT_APP_YOUTUBE_API_KEY}`
    const dispatch = useDispatch()

    useEffect (() => {
        const getData = async() => {
            const getTheVideos = await fetch(URL + "?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key="+apiKey,{
                method: 'GET', 
                // mode: 'cors', 
                cache: 'no-cache', 
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
            },
            });
            const jsonData = await getTheVideos.json();
            console.log(jsonData);
            dispatch({
                type: "GET_VIDEOS",
                payload: {...jsonData.items}
        });
        };
        getData();
        return () => {};
    }, []);
    return (
        <div>
            
        </div>
    )
}

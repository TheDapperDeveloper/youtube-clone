import React, { useEffect, useState } from 'react'

import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { VideoContainer } from '../styled-components/VideoStyles'

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
    }, [] );
    
    const titles = useSelector((state) => state.videos[0].snippet.channelTitle)
    // const channelTitle = useSelector((state) => state[0].snippet.channelTitle)
    // const views = useSelector((state) => state[0].statistics.viewCount)
    // const time = useSelector((state) => state[0].snippet.publishedAt)
    console.log(titles)
    return (
        <VideoContainer>
            {titles}
            
            
            
        </VideoContainer>
    )
}

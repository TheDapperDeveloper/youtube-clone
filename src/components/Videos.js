import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  EachVideoStyle,
  VideoContainer,
} from "../styled-components/VideoStyles";

import EachVideo from "./EachVideo";

export default function Videos() {
  const URL = "https://www.googleapis.com/youtube/v3/videos";
  const apiKey = `${process.env.REACT_APP_YOUTUBE_API_KEY}`;
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const getTheVideos = await fetch(
        URL +
          "?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=" +
          apiKey,
        {
          method: "GET",
          // mode: 'cors',
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const jsonData = await getTheVideos.json();
      console.log(jsonData);

      dispatch({
        type: "GET_VIDEOS",
        payload: jsonData,
      });
    };
    getData();
    return () => {};
  }, []);

  const videos = useSelector((state) => state.videos.items);
  console.log(videos);

  return (
    <VideoContainer>
      <EachVideoStyle>
        {videos?.map((video) => (
          <EachVideo videos={video} />
        ))}
      </EachVideoStyle>
    </VideoContainer>
  );
}

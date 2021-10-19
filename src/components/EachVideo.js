import React from "react";
import Videos from "./Videos";

export default function EachVideo(props) {
  console.log(props);
  return (
    <div>
      <img src={props?.videos?.snippet?.thumbnails?.medium?.url} alt="" />

      <h3>{props?.videos?.snippet?.title}</h3>

      {/* {props.videos.map((video) => (
        <p>{video.snippet.channelTitle}</p>
      ))}

      {props.videos.map((video) => (
        <p>{video.statistics.viewCount}</p>
      ))} */}
    </div>
  );
}

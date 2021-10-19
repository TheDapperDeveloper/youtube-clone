import React from "react";

export default function EachVideo(props) {
  console.log(props);

  const count = props?.videos?.statistics?.viewCount;

  return (
    <div>
      <img src={props?.videos?.snippet?.thumbnails?.medium?.url} alt="" />
      <h4>{props?.videos?.snippet?.title}</h4>
      <p>{props?.videos?.snippet?.channelTitle}</p>
      <p> {count.replace(/\d{1,3}(?=(\d{3})+(?!\d))/g, "$&,")} views</p>
    </div>
  );
}

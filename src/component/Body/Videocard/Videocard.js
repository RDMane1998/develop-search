import React from "react";
import "./videocard.css";

const Videocard = ({ info }) => {
  return (
    <div className="cartbox">
      <img
        className="thumbnail-img"
        alt="video-img"
        src={info.snippet?.thumbnails.medium.url}
      />
      <h3 className="title">{info.snippet?.title}</h3>
      <h5 className="text">{info.snippet?.channelTitle}</h5>
    </div>
  );
};

export default Videocard;

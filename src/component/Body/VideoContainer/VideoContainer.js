import React, { useEffect, useState } from "react";
import "../body.css";
import Videocard from "../Videocard/Videocard.js";
import Shimmer from "../Shimmer/Shimmer";
import { Video_API, Search_API } from "../../../utils/constants";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [searchText, setSearchText] = useState("");
  const [video, setVideo] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getSearchVideo();
    }
  };

  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(Video_API);
    const json1 = await data.json();
    setVideo(json1.items);
  };

  const getSearchVideo = async () => {
    const data = await fetch(Search_API + searchText);
    const json1 = await data.json();
    setVideo(json1.items);
  };

  return video.length == 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          className="search-bar"
          name="search"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="body">
        {video.map((video) => (
          <Link
            to={"/watch?v=" + (video.id.videoId ? video.id.videoId : video.id)}
          >
            <Videocard info={video} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default VideoContainer;

import React from "react";
import { useSearchParams, Link } from "react-router-dom";

const Watchpage = () => {
  const [searchParms] = useSearchParams();
  return (
    <div className="watchvideo">
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + searchParms.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1>
        <Link to="/">Return To Home</Link>
      </h1>
    </div>
  );
};

export default Watchpage;

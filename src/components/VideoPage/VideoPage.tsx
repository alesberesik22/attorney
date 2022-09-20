import React from "react";
import "./VideoPage.css";
import intro from "../assets/video/intro.mp4";

function VideoPage() {
  return (
    <div className="video_page">
      <video src={intro} muted loop autoPlay />
    </div>
  );
}

export default VideoPage;

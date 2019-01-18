import React from "react";

function VideoListItem({ video, onVideoSelect }) {
  console.log(video);
  const imgURL = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="media">
        <div className="video-item media-left">
          <img src={imgURL} alt="" className="src" />
        </div>

        <div className="media-body">
          <h6 className="p-3">{video.snippet.title}</h6>
        </div>
      </div>
    </li>
  );
}
export default VideoListItem;

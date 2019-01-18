import React from "react";

function VideoDetail({ video }) {
  console.log("vd:", video);
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  console.log("VideoID", videoId);
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          className="embed-responsive-item"
          src={url}
          title={video.snippet.title}
          autoplay={true}
        />
      </div>
      <div className="details">
        <div>
          <h6>{video.snippet.title}</h6>
        </div>
        <hr />
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}
export default VideoDetail;

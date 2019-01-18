import React from "react";
import VideoListItem from "./video_list_item";

function VideoList(props) {
  console.log(props.videos.length);

  const videoList = props.videos.map(video => (
    <VideoListItem
      onVideoSelect={props.onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));
  return <ul className="col-md-4 list-group m-2">{videoList}</ul>;
}
export default VideoList;

import React, { Component } from "react";
import "./App.css";
import _ from "lodash";
import SearchBar from "./component/search_bar";
import VideoList from "./component/video_list";
import YTSearch from "youtube-api-search";
import VideoDetail from "./component/video_details";

const API_KEY = "AIzaSyD7N4d00l2i33JnPNL9C8AVJ_NDqctUa1I";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { videos: [], selectedVideo: null };
    this.videoSearch("React js");
  }
  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos =>
      this.setState({ videos, selectedVideo: videos[0] })
    );
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <div className="d-flex flex-row ">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;

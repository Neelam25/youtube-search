import React, { Component } from "react";

class SearchBar extends Component {
  state = {};
  constructor(props) {
    super(props);
    this.state = { term: "" };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          placeholder="Search"
          onChange={e => this.onInputChange(e.target.value)}
          value={this.state.term}
        />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({ term });
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;

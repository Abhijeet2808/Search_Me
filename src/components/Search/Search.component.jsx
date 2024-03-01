import React, { Component } from "react";
import "./Search.styles.css";

class Search extends Component {
  render() {
    const { onSearchFieldChange } = this.props;
    return (
      <div id="search-container">
        <input id="search-input" type="text" onChange={onSearchFieldChange} />
      </div>
    );
  }
}
export default Search;

import React, { Component } from "react";
import { debounce } from "lodash";

export default class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: props.searchTerm };

    this.handleChange = debounce(this.handleChange, 500);
  }

  setSearchTerm(searchTerm) {
    this.setState({ searchTerm });
    this.handleChange(searchTerm);
  }

  handleChange(searchTerm) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(searchTerm);
    }
  }

  render() {
    return (
      <div className="search-box">
        <input className="input" name="tag" type="text" value={this.state.searchTerm} onChange={e => { this.setSearchTerm(e.target.value) }} />
      </div>
    );
  }
}

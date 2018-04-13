import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeeds } from "../actions";

class FeedsGrid extends Component {
  componentWillMount() {
    this.props.getFeeds("sunshine");
  }

  render() {
    return (
      <ul>
        <li>Hello World</li>
      </ul>
    );
  }
}

const mapStateToProps = state => {
  const { feeds } = state;
  return {
    feeds
  };
};

export default connect(mapStateToProps, { getFeeds })(FeedsGrid);

import React, { Component } from "react";
import FeedGridItem from "./feed-grid-item";

class FeedsGrid extends Component {
  render() {
    const { data } = this.props;

    if (data == null) {
      return <span>Loading...</span>;
    }

    if (data.length === 0) {
      return <span>Opps! There is no feeds to show, please try again.</span>;
    }

    return (
      <div className="feeds-grid-wrapper">{data.map((item, index) => <FeedGridItem data={item} key={index} />)}</div>
    );
  }
}

export default FeedsGrid;

import React, { Component } from "react";

export default class FeedGridItem extends Component {
  render() {
    const { data } = this.props;

    if (data == null) {
      return;
    }

    return (
      <div className="feed feed--grid-item">
        <div
          className="feed__cover background-center"
          style={{ backgroundImage: `url(${data.media.m})` }}>
        </div>
        <div className="feed__content">
          <p className="feed__author">
            <strong>Author:</strong> {data.author}
          </p>
          <div className="feed__tags">
            {data.tags && data.tags.split(' ').slice(0, 10).map((tag, index) => (
              <span className="tag" key={index}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

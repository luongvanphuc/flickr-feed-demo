import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeeds } from "./actions";
import FeedsGrid from "./components/feeds/feeds-grid";
import SiteHeader from "./components/layout/site-header";
import SiteFooter from "./components/layout/site-footer";
import "./assets/scss/index.css";

class App extends Component {
  componentWillMount() {
    this.props.getFeeds("sunshine");
  }

  render() {
    const { feeds } = this.props;

    return (
      <div className="App">
        <SiteHeader />
        <main id="site-page">
          <div className="wrapper-fixed">
            {feeds && feeds.length > 0 && <FeedsGrid data={feeds} />}
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    feeds: state.feed.feeds
  };
};

export default connect(mapStateToProps, { getFeeds })(App);

import React, { Component } from "react";
import { connect } from "react-redux";
import { getFeeds } from "./actions";
import SearchBox from "./components/widgets/search-box";
import FeedsGrid from "./components/feeds/feeds-grid";
import SiteHeader from "./components/layout/site-header";
import SiteFooter from "./components/layout/site-footer";
import "./assets/scss/index.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { searchTerm: "sunshine" };

    this.performSearch = this.performSearch.bind(this);
  }

  componentWillMount() {
    this.props.getFeeds(this.state.searchTerm);
  }

  performSearch(searchTerm) {
    this.setState({ searchTerm })
    this.props.getFeeds(searchTerm || this.state.searchTerm);
  }

  render() {
    const { feeds } = this.props;

    return (
      <div className="App">
        <SiteHeader />
        <main id="site-page">
          <div className="wrapper-fixed">
            <div className="search-box-wrapper">
              <h2 className="search-term">You are searching: <strong>{this.state.searchTerm}</strong></h2>
              <SearchBox searchTerm={this.state.searchTerm} onChange={this.performSearch} />
            </div>
            {feeds && <FeedsGrid data={feeds} />}
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

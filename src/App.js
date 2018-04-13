import React, { Component } from "react";
import FeedsGrid from "./components/feeds-grid";
import "./assets/scss/index.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <FeedsGrid />
      </div>
    );
  }
}

export default App;

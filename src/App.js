import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Import your component from ./homestars-icons/index.js.
// It is critical that you export it from that file
// or else it won't be accessible from the package
import { Star } from "./homestars-icons/index";

class App extends Component {
  render() {
    return pug`
      Star(size=200)
    `;
  }
}

export default App;

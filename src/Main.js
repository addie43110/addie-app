import React, { Component } from "react";
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><a href="/">home</a></li>
          <li><a href="/resume">resume</a></li>
          <li><a href="/blog">blog</a></li>
        </ul>

        <div className="content">
          <Home/>
        </div>
      </div>
    );
  }
}

export default Main;
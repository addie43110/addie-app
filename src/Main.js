import React, { Component } from "react";
import './Main.css';
import Home from "./Home";

class Main extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="header">
          <h1 className="title">addiespace</h1>
          <ul className="nav">
            <li className="navbtn" id="btn-home"><a href="/">home</a></li>
            <li className="navbtn" id="btn-resume"><a href="/resume">resume</a></li>
            <li className="navbtn" id="btn-blog"><a href="/blog">blog</a></li>
          </ul>
        </div>
        <div className="content">
          <Home/>
        </div>
      </div>
    );
  }
}

export default Main;
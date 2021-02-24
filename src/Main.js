import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import './Main.css';
import Home from "./Home";
import Resume from "./Resume";
import Blog from "./Blog";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div className="main-container">
          <div className="header">
            <h1 className="title">addiespace</h1>
            <ul className="nav">
              <li className="navbtn" id="btn-home"><NavLink exact to="/">home</NavLink></li>
              <li className="navbtn" id="btn-resume"><NavLink to="/resume">resume</NavLink></li>
              <li className="navbtn" id="btn-blog"><NavLink to="/blog">blog</NavLink></li>
            </ul>
          </div>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/resume" component={Resume}/>
            <Route path="/blog" component={Blog}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
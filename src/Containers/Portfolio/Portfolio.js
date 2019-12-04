import React, { Component } from "react";
import classes from "./Portfolio.module.css";

class Portfolio extends Component {
  render() {
    return (
      <div className={classes.page} id="portfolio">
        <h1 style={{ color: "white" }}>Portfolio</h1>
      </div>
    );
  }
}

export default Portfolio;

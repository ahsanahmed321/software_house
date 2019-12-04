import React, { Component } from "react";
import classes from "./Landing.module.css";

class Landing extends Component {
  render() {
    return (
      <div className={classes.page} id="landing">
        <h1 style={{ color: "white", textAlign: "left" }}>Lets Build</h1>
      </div>
    );
  }
}

export default Landing;

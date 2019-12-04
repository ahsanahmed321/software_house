import React, { Component } from "react";
import classes from "./Offices.module.css";

class Offices extends Component {
  render() {
    return (
      <div className={classes.page} id="offices">
        <h1 style={{ color: "white" }}>Offices</h1>
      </div>
    );
  }
}

export default Offices;

import React, { Component } from "react";
import classes from "./Team.module.css";
import { Row, Col, Container } from "reactstrap";
import { Image } from "react-bootstrap";
import ebad from "../../Images/ebad.jpg";
import ammad from "../../Images/ammad.jpg";
import mahad from "../../Images/mahad.jpg";
class Team extends Component {
  render() {
    return (
      <div className={classes.page} id="team">
        <h1 style={{ color: "white" }}>Team</h1>
      </div>
    );
  }
}

export default Team;

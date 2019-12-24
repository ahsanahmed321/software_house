import React, { Component } from "react";
import classes from "./Offices.module.css";
import GMap from "../../Components/GoogleMap/GoogleMap";
import { Row, Col, Container } from "reactstrap";

class Offices extends Component {
  render() {
    return (
      <div className={classes.page} id="offices">
        <h1 style={{ color: "white" }}>Offices</h1>
        <Container>
          <Row>
            <Col className={classes.map} sm={12} md={12} lg={4}>
              <div style={{ height: "18rem" }}>
                <GMap />
              </div>
              <div style={{ paddingTop: "16px" }}>
                <p>Gulshan Branch</p>
              </div>
            </Col>
            <Col className={classes.map} sm={12} md={12} lg={4}>
              <div style={{ height: "18rem" }}>
                <GMap />
              </div>
              <div style={{ paddingTop: "16px" }}>
                <p>DHA Branch</p>
              </div>
            </Col>
            <Col className={classes.map} sm={12} md={12} lg={4}>
              <div style={{ height: "18rem" }}>
                <GMap />
              </div>
              <div style={{ paddingTop: "16px" }}>
                <p>Shahra-e-Faisal Branch</p>
                <p></p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Offices;

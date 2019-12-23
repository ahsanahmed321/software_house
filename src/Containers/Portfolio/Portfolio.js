import React, { Component } from "react";
import classes from "./Portfolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {
  faUber,
  faAmazon,
  faPaypal,
  faEbay,
  faKaggle,
  faEthereum
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import { Row, Col, Container } from "reactstrap";

class Portfolio extends Component {
  render() {
    return (
      <div className={classes.page} id="portfolio">
        <h1 style={{ color: "white" }}>Portfolio</h1>
        <Container>
          <Row>
            <Col className={classes.portfolio} xs="6" sm="6" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faUber}
              />
              <p>Uber</p>
            </Col>
            <Col className={classes.portfolio} xs="6" sm="6" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faAmazon}
              />
              <p>Amazon</p>
            </Col>
            <Col className={classes.portfolio} xs="6" sm="6" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faPaypal}
              />
              <p>Paypal</p>
            </Col>
            <Col className={classes.portfolio} xs="6" sm="6" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faKaggle}
              />
              <p>Kaggle</p>
            </Col>
            <Col className={classes.portfolio} xs="6" sm="6" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faEbay}
              />
              <p>Ebay</p>
            </Col>
            <Col className={classes.portfolio} xs="6" sm="6" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faEthereum}
              />
              <p>Ethereum</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Portfolio;

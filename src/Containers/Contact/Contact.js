import React, { Component } from "react";
import classes from "./Contact.module.css";
import { Col, Row, Container, Label, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp, faFacebook } from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  render() {
    return (
      <div className={classes.page} id="contact">
        <h1 style={{ color: "white" }}>Contact</h1>
        <Container>
          <Row style={{ paddingTop: "32px" }}>
            <Col>
              <Label style={{ color: "white" }} for="exampleEmail">
                Email
              </Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Label style={{ color: "white" }} for="exampleText">
                Your Message
              </Label>
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </Row>

          <Row>
            <Col xs="12" sm="12" md="4" style={{ padding: "2rem" }}>
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "2rem" }}
                icon={faEnvelope}
              />
              <p style={{ color: "white" }}>info.softwareHouse@gmail.com</p>
            </Col>
            <Col xs="12" sm="12" md="4" style={{ padding: "2rem" }}>
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "2rem" }}
                icon={faWhatsapp}
              />
              <p style={{ color: "white" }}>0312-00234532</p>
            </Col>
            <Col xs="12" sm="12" md="4" style={{ padding: "2rem" }}>
              <FontAwesomeIcon
                style={{ color: "white", fontSize: "2rem" }}
                icon={faFacebook}
              />
              <p style={{ color: "white" }}>softwareFb.com</p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;

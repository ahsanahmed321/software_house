import React, { Component } from "react";
import classes from "./Services.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faDesktop,
  faRobot
} from "@fortawesome/free-solid-svg-icons";
import { Row, Col, Container } from "reactstrap";

class Services extends Component {
  render() {
    return (
      <div className={classes.page} id="services">
        <Container className={classes.container}>
          <h1 style={{ color: "white" }}>Services</h1>
          <Row>
            <Col className={classes.service} xs="12" sm="12" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faMobile}
              />
              <p className={classes.para}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis
              </p>
            </Col>
            <Col className={classes.service} xs="12" sm="12" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faDesktop}
              />
              <p className={classes.para}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis
              </p>
            </Col>
            <Col className={classes.service} xs="12" sm="12" md="4">
              <FontAwesomeIcon
                style={{ color: "gold", fontSize: "4rem" }}
                icon={faRobot}
              />
              <p className={classes.para}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Services;

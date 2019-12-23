import React, { Component } from "react";
import classes from "./Team.module.css";
import { Row, Col, Container } from "reactstrap";
import { Figure } from "react-bootstrap";
import ebad from "../../Images/Team/ebad.jpg";
import ammad from "../../Images/Team/ammad.jpg";
import mahad from "../../Images/Team/mahad.jpg";
import ahsan from "../../Images/Team/ahsan.jpg";
import abdullah from "../../Images/Team/abdullah.jpg";
import adnan from "../../Images/Team/Adnan.jpg";

class Team extends Component {
  render() {
    return (
      <div className={classes.page} id="team">
        <Container>
          <h1 style={{ color: "white" }}>Team</h1>
          <Row>
            <Col sm={1} md={6} lg={4}>
              <Figure className={classes.figure}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={adnan}
                  roundedCircle={true}
                />
                <Figure.Caption>Data Scientist</Figure.Caption>
              </Figure>
            </Col>
            <Col sm={1} md={6} lg={4}>
              <Figure className={classes.figure}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={mahad}
                  roundedCircle={true}
                />
                <Figure.Caption>Blockchain Developer</Figure.Caption>
              </Figure>
            </Col>
            <Col sm={1} md={6} lg={4}>
              <Figure className={classes.figure}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={ebad}
                  roundedCircle={true}
                />
                <Figure.Caption>Mern Stack Developer</Figure.Caption>
              </Figure>
            </Col>
            <Col sm={1} md={6} lg={4}>
              <Figure className={classes.figure}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={abdullah}
                  roundedCircle={true}
                />
                <Figure.Caption>Frontend Developer</Figure.Caption>
              </Figure>
            </Col>
            <Col sm={1} md={6} lg={4}>
              <Figure className={classes.figure}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={ammad}
                  roundedCircle={true}
                />
                <Figure.Caption>
                  Mern Stack/Blockchain/Android Developer
                </Figure.Caption>
              </Figure>
            </Col>
            <Col sm={1} md={6} lg={4}>
              <Figure className={classes.figure}>
                <Figure.Image
                  width={171}
                  height={180}
                  alt="171x180"
                  src={ahsan}
                  roundedCircle={true}
                />
                <Figure.Caption>Mern Stack Developer</Figure.Caption>
              </Figure>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Team;

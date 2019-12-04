import React from "react";
import { Component } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Aux from "../Auxx/Auxx";

class layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        <main>{this.props.children}</main>
        <footer></footer>
      </Aux>
    );
  }
}
export default layout;

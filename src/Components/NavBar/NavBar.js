import React from "react";
import { Component } from "react";
import { Link } from "react-scroll";
import Button from "@material-ui/core/Button";
import classes from "./NavBar.module.css";
import MenuIcon from "@material-ui/icons/Menu";
import Aux from "../../HOC/Auxx/Auxx";
import Backdrop from "../Backdrop/Backdrop";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

class NavBar extends Component {
  state = {
    showSideDrawer: false
  };

  sideDrawerHandler = () => {
    this.setState({ showSideDrawer: !this.state.showSideDrawer });
  };

  render() {
    var sidedrawer;

    if (this.state.showSideDrawer) {
      sidedrawer = (
        <Aux>
          <Backdrop clicked={this.sideDrawerHandler} />
          <div className={classes.Drawer}>
            <div>
              <Button>
                <Link
                  className={classes.DrawerItem}
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Welcome
                </Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link
                  className={classes.DrawerItem}
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
                </Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link
                  className={classes.DrawerItem}
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Portfolio
                </Link>
              </Button>
            </div>
            <div>
              <Button>
                <Link
                  className={classes.DrawerItem}
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Offices
                </Link>
              </Button>
              <Button>
                <Link
                  className={classes.DrawerItem}
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Team
                </Link>
              </Button>
              <Button>
                <Link
                  className={classes.DrawerItem}
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </Aux>
      );
    }

    return (
      <Aux>
        <Navbar className={classes.NavBar} fixed="top">
          <NavbarBrand>
            <Link className={classes.NavBrand} to="/">
              Soft House
            </Link>
          </NavbarBrand>
          <Nav className={classes.NavItems}>
            <NavItem>
              <Button>
                <Link
                  className={classes.NavItem}
                  activeClass="active"
                  to="landing"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Welcome
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button>
                <Link
                  className={classes.NavItem}
                  activeClass="active"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Services
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button>
                <Link
                  className={classes.NavItem}
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Portfolio
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button>
                <Link
                  className={classes.NavItem}
                  activeClass="active"
                  to="offices"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Offices
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button>
                <Link
                  className={classes.NavItem}
                  activeClass="active"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Team
                </Link>
              </Button>
            </NavItem>
            <NavItem>
              <Button>
                <Link
                  className={classes.NavItem}
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contact
                </Link>
              </Button>
            </NavItem>
          </Nav>
          <NavItem className={classes.NavMenu}>
            <Button>
              <MenuIcon onClick={this.sideDrawerHandler} />
            </Button>
          </NavItem>
        </Navbar>
        {sidedrawer}
      </Aux>
    );
  }
}

export default NavBar;

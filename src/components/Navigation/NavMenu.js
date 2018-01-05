import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import {
  colors,
  buttonReset,
  fontFamily,
  rem,
  cubicBezier
} from "../../styles";

const NavItem = ({ open, onClick, order, route, routeName, ...other }) => {
  return (
    <NavMenuListItem order={order}>
      <Link onClick={onClick} to={route} tabIndex={open ? 0 : -1}>
        {routeName}
      </Link>
    </NavMenuListItem>
  );
};

class NavMenu extends Component {
  render() {
    const { open, onClick } = this.props;
    return (
      <NavMenuContainer open={open}>
        <NavMenuList open={open}>
          <NavMenuListItem order={1}>
            <Link onClick={onClick} to="/" tabIndex={open ? 0 : -1}>
              Home
            </Link>
          </NavMenuListItem>
          {/* <NavMenuListItem order={2}>
            <Link onClick={onClick} to="/blog" tabIndex={open ? 0 : -1}>
              Blog
            </Link>
          </NavMenuListItem>
          <NavMenuListItem order={3}>
            <Link onClick={onClick} to="/" tabIndex={open ? 0 : -1}>
              About
            </Link>
          </NavMenuListItem> */}
          <NavMenuListItem order={2}>
            <a
              // onClick={onClick}
              href="https://github.com/hellobrian"
              tabIndex={open ? 0 : -1}
            >
              GitHub
            </a>
          </NavMenuListItem>
          <NavMenuListItem order={3}>
            <a
              // onClick={onClick}
              href="https://www.linkedin.com/in/hellobrian/"
              tabIndex={open ? 0 : -1}
            >
              LinkedIn
            </a>
          </NavMenuListItem>
          <NavMenuListItem order={4}>
            <a
              // onClick={onClick}
              href="https://twitter.com/_brianhan"
              tabIndex={open ? 0 : -1}
            >
              Twitter
            </a>
          </NavMenuListItem>
        </NavMenuList>
      </NavMenuContainer>
    );
  }
}

const NavMenuContainer = styled.div`
  position: fixed;
  z-index: 9000;
  top: 0;
  /* top: ${rem(60)}; */
  background-color: ${props =>
    props.open ? colors.purpleLight.hex : colors.purple.hex};
  transform: ${props => (props.open ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  /* height: 100%; */
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 250ms ${cubicBezier.standard},
    background-color 500ms ${cubicBezier.standard};
`;

const NavMenuList = styled.ul`
  opacity: ${props => (props.open ? 1 : 0)};
  padding: 0 2rem;
  list-style-type: none;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  li {
    transform: ${props =>
      props.open ? "translateX(0)" : "translateX(-1000px)"};
  }
`;

const NavMenuListItem = styled.li`
  width: 100%;
  margin: 0.5rem 0;
  transition: ${props =>
    props.order && `transform ${props.order * 200}ms ${cubicBezier.standard}`};

  & > a {
    display: inline-block;
    text-decoration: none;
    color: ${colors.white.hex};
    font-size: 2rem;
    ${fontFamily.ibm};
    font-weight: 600;
    padding-left: 1rem;
    padding-right: 2rem;
    width: 100%;
    line-height: 1.5;
    border: 2px solid transparent;
    letter-spacing: ${rem(-0.5)};

    &:focus {
      background-color: rgba(255, 255, 255, 0.25);
      border: 2px solid white;
      outline: none;
    }
  }
`;

export default NavMenu;

import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import Navigation from "../components/Navigation";
import { colors, buttonReset, fontFamily, rem, cubicBezier } from "../styles";

import "./index.css";

class TemplateWrapper extends Component {
  state = {
    isNavigationMenuOpen: false
  };
  static propTypes = {
    children: PropTypes.func
  };

  toggleNavigationMenu = () =>
    this.setState({ isNavigationMenuOpen: !this.state.isNavigationMenuOpen });

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet
          title="Brian Han"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        />
        <link
          href="https://unpkg.com/@ibm/type@0.5.3/css/ibm-type.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato|Open+Sans|Playfair+Display:400,700,900"
          rel="stylesheet"
        />
        <Navigation
          open={this.state.isNavigationMenuOpen}
          onButtonClick={this.toggleNavigationMenu}
        />
        <NavigationMenu open={this.state.isNavigationMenuOpen}>
          <NavigationMenuList open={this.state.isNavigationMenuOpen}>
            <NavigationMenuListItem>Home</NavigationMenuListItem>
            <NavigationMenuListItem>Blog</NavigationMenuListItem>
            <NavigationMenuListItem>Uses</NavigationMenuListItem>
            <NavigationMenuListItem>GitHub</NavigationMenuListItem>
          </NavigationMenuList>
        </NavigationMenu>
        <BodyContainer>{children()}</BodyContainer>
      </div>
    );
  }
}

const BodyContainer = styled.div`
  position: relative;
  z-index: 8000;
`;

const NavigationMenu = styled.div`
  position: absolute;
  z-index: 9000;
  background-color: ${colors.purple.hex};
  transform: ${props => (props.open ? "scaleY(1)" : "scaleY(0)")};
  transform-origin: top;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  transition: transform 250ms ${cubicBezier.standard};
`;

const NavigationMenuList = styled.ul`
  display: block;
  opacity: ${props => (props.open ? 1 : 0)};
  height: 500px;
  width: 100%;
  padding: 0 2rem;
  list-style-type: none;
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-1000px)")};
  transition: transform 400ms ${cubicBezier.standard};
`;

const NavigationMenuListItem = styled.li`
  color: white;
  font-size: 2rem;
  ${fontFamily.ibm};
`;

export default TemplateWrapper;

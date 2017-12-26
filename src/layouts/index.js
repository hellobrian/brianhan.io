import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { NavMenu, NavMenuTrigger } from "../components/Navigation";
import { colors, buttonReset, fontFamily, rem, cubicBezier } from "../styles";

import "./index.css";

class TemplateWrapper extends Component {
  state = {
    isNavMenuOpen: false
  };
  static propTypes = {
    children: PropTypes.func
  };

  toggleNavMenu = () =>
    this.setState({ isNavMenuOpen: !this.state.isNavMenuOpen });

  render() {
    const { children } = this.props;
    return (
      <LayoutContainer open={this.state.isNavMenuOpen}>
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
        <NavMenuTrigger
          onButtonClick={this.toggleNavMenu}
          open={this.state.isNavMenuOpen}
        />
        <NavMenu open={this.state.isNavMenuOpen} onClick={this.toggleNavMenu} />
        <BodyContainer>{children()}</BodyContainer>
      </LayoutContainer>
    );
  }
}

const LayoutContainer = styled.div`
  height: 500vh;
`;

const BodyContainer = styled.div`
  background-color: ${colors.purple.hex};
  position: relative;
  z-index: 8000;
  padding-top: ${rem(60)};
`;

export default TemplateWrapper;

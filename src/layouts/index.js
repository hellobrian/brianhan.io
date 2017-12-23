import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import styled from "styled-components";
import { colors, buttonReset, fontFamily, rem } from "../styles";
import MenuIcon from "../components/MenuIcon";

import "./index.css";

class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func
  };

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
        <Header />
        <div>{children()}</div>
      </div>
    );
  }
}

const Header = () => (
  <StyledHeader>
    <InnerContainer>
      {/* <HeadingLink>
        <Link className="link" to="/">
          Brian
        </Link>
      </HeadingLink> */}
      <MenuButton onClick={() => console.log("hi")}>
        <MenuIcon className="icon" />
      </MenuButton>
    </InnerContainer>
  </StyledHeader>
);

const StyledHeader = styled.header`
  background-color: ${colors.purple.hex};
  font-size: 1rem;
`;

const InnerContainer = styled.div`
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-end;
  align-items: center;
  height: ${rem(50)};
  padding: 2rem;
`;

const HeadingLink = styled.h1`
  display: inline-flex;

  .link {
    color: ${colors.white.hex};
    font-size: 24px;
    text-decoration: none;
    ${fontFamily.ibm};
  }
`;

const MenuButton = styled.button`
  display: inline-block;
  color: ${colors.white.hex};
  font-size: 1rem;
  ${fontFamily.ibm};
  ${buttonReset};

  .icon {
    fill: ${colors.white.hex};
    width: 30px;
    height: 30px;
  }
`;

export default TemplateWrapper;

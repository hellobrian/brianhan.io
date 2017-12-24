import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import {
  colors,
  buttonReset,
  fontFamily,
  rem,
  cubicBezier
} from "../../styles";
import MenuIcon from "./MenuIcon";

class Navigation extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onButtonClick: PropTypes.func,
    onClick: PropTypes.func
  };

  static defaultProps = {
    open: false,
    onButtonClick: () => {},
    onClick: () => {}
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.setState({ isMenuOpen: nextProps.open });
    }
  }

  render() {
    const { onButtonClick, open } = this.props;
    return (
      <StyledHeader className="StyledHeader" open={open}>
        <InnerContainer>
          {/* <HeadingLink>
        <Link className="link" to="/">
          Brian
        </Link>
      </HeadingLink> */}
          <MenuButton
            onClick={onButtonClick}
            onButtonClick={onButtonClick}
            open={open}
          >
            <StyledMenuIcon open={open} />
          </MenuButton>
        </InnerContainer>
      </StyledHeader>
    );
  }
}

const StyledHeader = styled.header`
  background-color: ${props => (props.open ? "#7732bb" : colors.purple.hex)};
  transition: background-color 500ms ${cubicBezier.standard};
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

const StyledMenuIcon = styled(MenuIcon)`
  transform: ${props => (props.open ? "rotate(-90deg)" : "rotate(0deg)")};
  fill: ${colors.white.hex};
  transition: transform 250ms ${cubicBezier.easeOut};
  margin: 10px 8px 6px;
  width: 20px;
  height: 14px;
`;

const MenuButton = styled.button`
  background: ${props => (props.open ? "rgba(255, 255, 255, .25)" : "none")};
  color: ${colors.white.hex};
  display: inline-block;
  font-size: 1rem;
  transition: background-color 200ms ${cubicBezier.easeOut},
    fill 200ms ${cubicBezier.easeOut};
  ${buttonReset};
  ${fontFamily.ibm};

  &:focus {
    outline: 1px solid ${colors.white.hex};
  }
`;

export default Navigation;

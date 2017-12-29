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
import MenuIcon from "../MenuIcon";

class NavMenuTrigger extends Component {
  static propTypes = {
    open: PropTypes.bool,
    onButtonClick: PropTypes.func
  };

  static defaultProps = {
    open: false,
    onButtonClick: () => {}
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.open !== nextProps.open) {
      this.setState({ isMenuOpen: nextProps.open });
    }
  }

  render() {
    const { onButtonClick, open } = this.props;
    return (
      <Container open={open}>
        <Button onClick={onButtonClick} open={open}>
          <StyledMenuIcon open={open} />
        </Button>
      </Container>
    );
  }
}

const Container = styled.div`
  position: fixed;
  z-index: 9000;
  /* width: 100%; */
  right: 0;
  height: ${rem(60)};
  background-color: ${props =>
    props.open ? colors.purpleLight.hex : colors.purple.hex};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  transition: background-color 500ms ${cubicBezier.standard};
`;

const Button = styled.button`
  ${buttonReset};
  ${fontFamily.ibm};
  background: ${props => (props.open ? "rgba(255, 255, 255, .25)" : "none")};
  border-radius: 50%;
  border: 2px solid transparent;
  color: ${colors.white.hex};
  display: inline-flex;
  padding: ${rem(6)};
  font-size: 1rem;
  transition: background-color 200ms ${cubicBezier.easeOut},
    fill 200ms ${cubicBezier.easeOut};

  &:focus {
    border: 2px solid ${colors.white.hex};
    outline: none;
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  fill: ${colors.white.hex};
  height: ${rem(20)};
  width: 20px;
  transform: ${props =>
    props.open
      ? "translateX(0.1px) translateY(0px)"
      : "translateX(0px) translateY(0px)"};
  transition: transform 200ms ${cubicBezier.easeOut};
  rect {
    transition: transform 200ms ${cubicBezier.easeOut},
      height 200ms ${cubicBezier.easeOut}, width 200ms ${cubicBezier.easeOut};
  }

  .rect1 {
    width: ${props => (props.open ? "24px" : "20px")};
    height: ${props => (props.open ? rem(3.15) : "2px")};

    transform: ${props =>
      props.open
        ? "rotate(45deg) translateY(-3.65px) translateX(0px)"
        : "rotate(0deg) translateY(0px) translateX(0px)"};
  }

  .rect2 {
    transform: ${props =>
      props.open ? "translateX(100%)" : "translateX(0px)"};
  }

  .rect3 {
    width: ${props => (props.open ? "24px" : "20px")};
    height: ${props => (props.open ? rem(3.15) : "2px")};
    transform: ${props =>
      props.open
        ? "rotate(-45deg) translateY(-1.5px) translateX(-9.85px)"
        : "rotate(0deg) translateY(0px) translateX(0px)"};
  }
`;

export default NavMenuTrigger;

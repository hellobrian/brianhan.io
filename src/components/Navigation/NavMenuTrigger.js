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
  width: 100%;
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
  background: ${props => (props.open ? "rgba(255, 255, 255, .25)" : "none")};
  color: ${colors.white.hex};
  display: inline-flex;
  padding: ${rem(8)};

  font-size: 1rem;
  transition: background-color 200ms ${cubicBezier.easeOut},
    fill 200ms ${cubicBezier.easeOut};
  ${fontFamily.ibm};

  &:focus {
    outline: 1px solid ${colors.white.hex};
  }
`;

const StyledMenuIcon = styled(MenuIcon)`
  fill: ${colors.white.hex};
  height: ${rem(20)};
  /* margin-top: ${rem(10)};
  margin-left: ${rem(8)};
  margin-right: ${rem(8)};
  margin-bottom: ${rem(6)}; */
  transform: ${props => (props.open ? "rotate(-90deg)" : "rotate(0deg)")};
  transition: transform 250ms ${cubicBezier.easeOut};
  width: 20px;
`;

export default NavMenuTrigger;

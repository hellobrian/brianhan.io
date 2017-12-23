import React, { Component } from "react";

class MenuIcon extends Component {
  handleClick = event => {
    const { onClick } = this.props;
    if (onClick) {
      onClick();
    } else {
      event.preventDefault();
    }
  };

  render() {
    const { ...other } = this.props;

    return (
      <svg
        onClick={this.handleClick}
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fillRule="evenodd"
        {...other}
      >
        <path d="M0 0h20v2H0zm0 6h20v2H0zm0 6h20v2H0z" />
      </svg>
    );
  }
}

export default MenuIcon;

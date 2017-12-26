import React, { Component } from "react";

class MenuIcon extends Component {
  render() {
    const { ...other } = this.props;

    return (
      <svg
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

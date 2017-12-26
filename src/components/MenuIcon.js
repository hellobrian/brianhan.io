import React, { Component } from "react";
import PropTypes from "prop-types";

class MenuIcon extends Component {
  static propTypes = {
    viewBox: PropTypes.string
  };

  static defaultProps = {
    viewBox: "0 0 20 14"
  };
  render() {
    const { viewBox, ...other } = this.props;

    return (
      <svg
        width="20"
        height="14"
        viewBox={viewBox}
        fillRule="evenodd"
        {...other}
      >
        <rect className="rect1" x="0" y="0" width="20" height="2" />
        <rect className="rect2" x="0" y="6" width="20" height="2" />
        <rect className="rect3" x="0" y="12" width="20" height="2" />
      </svg>
    );
  }
}

export default MenuIcon;

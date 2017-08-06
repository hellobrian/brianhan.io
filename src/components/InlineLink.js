import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Anchor = glamorous.a({
  textDecoration: 'none',
  color: 'blue',
  fontWeight: 700,
  ':visited': {
    color: 'darkblue',
  },
});

class InlineLink extends Component {
  static propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    href: '#',
  };

  render() {
    const { href, children, ...other } = this.props;

    return (
      <Anchor {...other} href={href}>
        {children}
      </Anchor>
    );
  }
}

export default InlineLink;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const Paragraph = glamorous.p({
  display: 'inline-block',
  fontSize: '1.15rem',
  lineHeight: 1.2,
});

class Text extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'body-text',
  };

  render() {
    const { className, children, ...other } = this.props;

    return (
      <Paragraph className={className} {...other}>
        {children}
      </Paragraph>
    );
  }
}

export default Text;

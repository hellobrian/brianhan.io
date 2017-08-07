import React, { Component } from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const StyledSection = glamorous.section({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

class Section extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    className: 'section',
  };

  render() {
    const { className, children, ...other } = this.props;

    return (
      <StyledSection className={`section ${className}`} {...other}>
        {children}
      </StyledSection>
    );
  }
}

export default Section;

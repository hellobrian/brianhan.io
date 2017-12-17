import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

// import './index.css';
import './prism-okaidia.css';

const Header = () => (
  <div>
    <div>
      <h1>
        <Link to="/">Brian Han</Link>
      </h1>
    </div>
  </div>
);

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
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' }
          ]}
        />
        <Header />
        <div>{children()}</div>
      </div>
    );
  }
}

export default TemplateWrapper;

import React, { Component } from 'react';
import Icon from './Icon';
import InlineLink from './InlineLink';

class App extends Component {
  state = {
    isLoading: true,
  };

  componentDidMount() {
    this.setState({ isLoading: false });
  }
  render() {
    return this.state.isLoading
      ? <div>Loading...</div>
      : <div>
          <section className="section section--intro">
            <h1 className="heading">Brian Han</h1>
            <p className="body-text">
              Front-end developer at{' '}
              <InlineLink href="https://console.bluemix.net/">IBM Bluemix</InlineLink> and{' '}
              <InlineLink href="http://carbondesignsystem.com/">
                Carbon Design System
              </InlineLink>.
            </p>
            <p className="body-text">Based in Austin, TX.</p>
          </section>

          <section className="section section--contact">
            <h2 className="heading">Contact</h2>
            <p className="body-text">thisisbrianhan@gmail.com</p>
            <div className="icon-container">
              <a href="https://github.com/hellobrian">
                <Icon
                  className="icon icon--github"
                  iconName="github"
                  title="github"
                  description="link to github profile"
                />
              </a>
              <a href="https://twitter.com/_brianhan">
                <Icon
                  className="icon icon--twitter"
                  iconName="twitter"
                  title="twitter"
                  description="link to twitter profile"
                />
              </a>
              <a href="https://medium.com/@brianhan">
                <Icon
                  className="icon icon--medium"
                  iconName="medium"
                  title="medium"
                  description="link to medium profile"
                />
              </a>
              <a href="https://www.instagram.com/brianhan/">
                <Icon
                  className="icon icon--instagram"
                  iconName="instagram"
                  title="instagram"
                  description="link to instagram profile"
                />
              </a>
              <a href="https://www.linkedin.com/in/hellobrian/">
                <Icon
                  className="icon icon--linkedin"
                  iconName="linkedin"
                  title="linkedin"
                  description="link to linkedin profile"
                />
              </a>
            </div>
          </section>
        </div>;
  }
}

export default App;

import React, { Component } from 'react';
import Icon from './components/Icon';
import InlineLink from './components/InlineLink';
import Text from './components/Text';
import Section from './components/Section';
import './main.css';

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
      : <div className="layout">
          <Section className="section--intro">
            <h1 className="heading">Brian Han</h1>
            <Text>
              Front-end developer at{' '}
              <InlineLink href="https://console.bluemix.net/">IBM Bluemix</InlineLink> and{' '}
              <InlineLink href="http://carbondesignsystem.com/">
                Carbon Design System
              </InlineLink>.
            </Text>
            <Text>Based in Austin, TX.</Text>
          </Section>

          <Section className="section--contact">
            <h2 className="heading">Contact</h2>
            <Text>thisisbrianhan@gmail.com</Text>
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
          </Section>
        </div>;
  }
}

export default App;

import React, {Component} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import About from './About';
class AboutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <About />;
  }
}

export default AboutContainer;

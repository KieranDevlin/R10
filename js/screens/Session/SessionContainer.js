import React, {Component} from 'react';
import Session from './Session';
import {SafeAreaView, ActivityIndicator} from 'react-native';
class SessionContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return <Session item={this.props.route.params.item} />;
  }
}

export default SessionContainer;

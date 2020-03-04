import React, {Component} from 'react';
import Session from './Session';
import {SafeAreaView, ActivityIndicator} from 'react-native';
class SessionContainer extends Component {
  render() {
    return (
      <Session
        item={this.props.route.params.item}
        navigation={this.props.navigation}
      />
    );
  }
}

export default SessionContainer;

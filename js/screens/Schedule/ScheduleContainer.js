import React, {Component} from 'react';
import Schedule from './Schedule';
import {SafeAreaView, ActivityIndicator} from 'react-native';
class ScheduleContainer extends Component {
  render() {
    return <Schedule navigation={this.props.navigation} />;
  }
}

export default ScheduleContainer;

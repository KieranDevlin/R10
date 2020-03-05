import React, {Component} from 'react';
import Faves from './Faves';
import {SafeAreaView, ActivityIndicator} from 'react-native';

class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Faves navigation={this.props.navigation} />;
  }
}

export default FavesContainer;

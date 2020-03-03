import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './navigation';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    );
  }
}

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import {ScreenStackHeaderBackButtonImage} from 'react-native-screens';

const GradientHeader = props => (
  <View style={{backgroundColor: 'white', overflow: 'hidden'}}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

export const sharedScreenOptions = navigation => ({
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerBackTitleVisible: false,
  headerTitleStyle: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
  },
});

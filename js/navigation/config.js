import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
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

const MenuButton = ({navigation}) => {
  return (
    <Icon
      name="menu"
      color="white"
      size={25}
      style={{marginLeft: 20}}
      onPress={() => navigation.toggleDrawer()}
    />
  );
};

export const sharedScreenOptions = props => ({
  header: props => <GradientHeader {...props} />,
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerBackTitleVisible: false,
  headerTitleStyle: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
  },
  ...Platform.select({
    android: {
      headerLeft: () => <MenuButton navigation={props.navigation} />,
    },
  }),
});

GradientHeader.propTypes = {
  props: PropTypes.object,
};

MenuButton.propTypes = {
  navigation: PropTypes.object,
};

sharedScreenOptions.propTypes = {
  props: PropTypes.object,
};

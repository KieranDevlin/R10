import React from 'react';
import {StyleSheet, View, Platform} from 'react-native';
import {Header} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

import styles from './styles';
const GradientHeader = props => (
  <View style={styles.header}>
    <LinearGradient
      colors={['#cf392a', '#9963ea']}
      start={{x: 0.0, y: 1.0}}
      end={{x: 1.0, y: 0.0}}
      style={[StyleSheet.absoluteFill, {height: '100%', width: '100%'}]}
    />
    <Header {...props} />
  </View>
);

const MenuButton = ({navigation, route}) => {
  return route.name === 'Session' ? (
    <Icon
      name="chevron-left"
      color="white"
      size={25}
      style={styles.menuButton}
      onPress={() => navigation.goBack()}
    />
  ) : (
    <Icon
      name="menu"
      color="white"
      size={25}
      style={styles.menuButton}
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
      headerLeft: () => (
        <MenuButton navigation={props.navigation} route={props.route} />
      ),
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

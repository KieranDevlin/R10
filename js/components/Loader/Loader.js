import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styles from './styles';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator />
    </View>
  );
};

export default Loader;

import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  fullScreen: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;

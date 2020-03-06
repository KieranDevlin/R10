import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: Dimensions.get('window').height * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    fontFamily: 'Montserrat',
  },
});

export default styles;

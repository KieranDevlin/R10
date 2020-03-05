import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  header: {
    height: 80,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#000000',
    fontFamily: 'Montserrat',
    fontSize: 20,
    marginVertical: 10,
  },
  content: {
    marginVertical: 10,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
  },
  text: {
    fontSize: 15,
    marginVertical: 10,
    fontFamily: 'Montserrat-light',
  },
});

export default styles;

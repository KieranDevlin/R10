import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  header: {
    height: 100,
    // width: Dimensions.get('window').width,
    borderBottomColor: '#F6F6F6',
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    // backgroundColor: 'linear-gradient(#cf392, #9963ea)',
    color: '#e6e6e6',
  },
  content: {
    height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
    paddingTop: 16,
  },
});

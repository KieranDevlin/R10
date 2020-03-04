import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  fullScreen: {
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  root: {
    backgroundColor: '#000000',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutContainer: {
    position: 'relative',
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  close: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  about: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontSize: 16,
  },
  speakerContainer: {
    backgroundColor: '#ffffff',
    height: Dimensions.get('window').height * 0.8,
    width: Dimensions.get('window').width - 20,
    alignItems: 'center',
    padding: 20,
    borderRadius: 4,
  },
  avatar: {
    height: 120,
    width: 120,
    borderRadius: 60,
  },
  name: {
    fontFamily: 'Montserrat',
    fontSize: 32,
    marginVertical: 10,
  },
  bio: {
    fontFamily: 'Montserrat-light',
    marginVertical: 10,
  },
  button: {
    marginVertical: 10,
    height: 40,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'Montserrat',
  },
});

export default styles;

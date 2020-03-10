import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aboutContainer: {
    marginTop: 30,
    position: 'relative',
    height: 150,
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
    position: 'absolute',
    color: '#ffffff',
    fontFamily: 'Montserrat',
    fontSize: 16,
    top: 5,
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
    fontSize: 28,
    marginVertical: 14,
  },
  bio: {
    fontFamily: 'Montserrat-light',
    fontSize: 15,
    marginVertical: 10,
    lineHeight: 24,
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

import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  root: {
    padding: 20,
  },
  session: {
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  location: {
    color: '#999999',
    fontWeight: '500',
    fontSize: 16,
    fontFamily: 'Montserrat-light',
  },
  title: {
    marginVertical: 10,
    fontSize: 26,
    fontFamily: 'Montserrat',
  },
  time: {
    marginVertical: 10,
    color: '#cf392a',
    fontFamily: 'Montserrat',
  },
  desc: {
    fontSize: 18,
    fontFamily: 'Montserrat-light',
    marginVertical: 10,
  },
  container: {
    marginVertical: 10,
  },
  speakerContainer: {
    marginVertical: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 60,
    width: 60,
    borderRadius: 50,
    marginRight: 10,
  },
  speakerName: {
    fontFamily: 'Montserrat',
  },

  buttonContainer: {
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
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

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  sessionTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-light',
    fontWeight: '800',
    marginBottom: 8,
  },
  sessionInfo: {
    padding: 8,
    borderBottomColor: '#e6e6e6',
    borderBottomWidth: 2,
  },
  sessionLocation: {
    color: '#999999',
    fontFamily: 'Montserrat',
  },
  liked: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
  },
});

export default styles;

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

// Medium Grey: #999999
// Light Grey: #e6e6e6
// Blue: #8797D6
// Purple: #9963ea
// Red: #cf392a

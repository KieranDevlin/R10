import React from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';
const Map = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am Map screen</Text>
    </View>
  );
};

Map.propTypes = {
  navigation: PropTypes.object,
};
export default Map;

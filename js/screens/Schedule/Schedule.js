import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Schedule = ({navigation}) => {
  return (
    /////////////////////////
    //TODO - NO INLINE STYLES
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>I am Schedule screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Session');
        }}>
        <Text>Go to session</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Speaker');
        }}>
        <Text>Go to Speaker</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Schedule;

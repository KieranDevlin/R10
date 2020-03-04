import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';

const ScheduleListItem = ({item, navigation}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Session', {item, navigation});
      }}>
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>{item.location}</Text>
        <Text>{item.title}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default ScheduleListItem;

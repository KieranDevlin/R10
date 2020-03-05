import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ScheduleListItem = ({item, navigation, faveIds}) => {
  return (
    <TouchableHighlight
      onPress={() => {
        navigation.navigate('Session', {item, navigation});
      }}>
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>{item.title}</Text>
        <View style={styles.liked}>
          <Text style={styles.sessionLocation}>{item.location}</Text>
          {faveIds?.includes(item.id) && (
            <Icon name="heart" size={20} color="red" />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default ScheduleListItem;

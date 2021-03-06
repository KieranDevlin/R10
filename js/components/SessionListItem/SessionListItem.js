import React from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';
const SessionListItem = ({item, navigation, faveIds}) => {
  return (
    <TouchableHighlight
      underlayColor={'pink'}
      onPress={() => {
        navigation.navigate('Session', {item, navigation});
      }}>
      <View style={styles.sessionInfo}>
        <Text style={styles.sessionTitle}>{item.title}</Text>
        <View style={styles.liked}>
          <Text style={styles.sessionLocation}>{item.location}</Text>
          {faveIds?.includes(item.id) && (
            <Icon name="heart" size={16} color="red" />
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

SessionListItem.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
};

export default SessionListItem;

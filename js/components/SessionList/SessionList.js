import React from 'react';
import {SectionList, View, Text} from 'react-native';
import styles from './styles';
import moment from 'moment';
import SessionListItem from '../SessionListItem';
import PropTypes from 'prop-types';
const SessionList = ({allSessions, navigation, faveIds}) => {
  return (
    <View>
      <SectionList
        sections={allSessions}
        keyExtractor={session => session.id}
        renderItem={({item}) => (
          <SessionListItem
            item={item}
            navigation={navigation}
            faveIds={faveIds}
          />
        )}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.sessionTitleContainer}>
            <Text style={styles.sessionTitle}>
              {moment(title).format('h:mm A')}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

SessionListItem.propTypes = {
  allSessions: PropTypes.array,
  navigation: PropTypes.object,
  faveIds: PropTypes.array,
};

export default SessionList;

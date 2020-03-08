import React from 'react';
import {SectionList, View, Text} from 'react-native';
import styles from './styles';
import moment from 'moment';
import SessionListItem from '../SessionListItem';

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
        )}></SectionList>
    </View>
  );
};

export default SessionList;

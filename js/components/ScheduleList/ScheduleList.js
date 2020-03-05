import React from 'react';
import {SectionList, View, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import moment from 'moment';
import ScheduleListItem from '../ScheduleListItem';

const ScheduleList = ({allSessions, navigation, faveIds}) => {
  return (
    <View>
      <SectionList
        sections={allSessions}
        keyExtractor={session => session.id}
        renderItem={({item}) => (
          <ScheduleListItem
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

export default ScheduleList;

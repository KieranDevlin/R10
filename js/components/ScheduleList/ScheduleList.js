import React from 'react';
import {SectionList, View, Text} from 'react-native';
import styles from './styles';
import moment from 'moment';

const ScheduleListItem = ({item}) => {
  console.log(item);
  return (
    <View style={styles.sessionInfo}>
      <Text>{item.location}</Text>
      <Text>{item.title}</Text>
    </View>
  );
};

const ScheduleList = ({allSessions}) => {
  console.log(allSessions);
  return (
    <View>
      <SectionList
        sections={allSessions}
        keyExtractor={session => session.id}
        renderItem={({item}) => <ScheduleListItem item={item} />}
        renderSectionHeader={({section: {title}}) => (
          <View style={styles.sessionTitleContainer}>
            <Text style={styles.sessionTitle}>
              {moment(title).format('h:mm a')}
            </Text>
          </View>
        )}></SectionList>
    </View>
  );
};

export default ScheduleList;

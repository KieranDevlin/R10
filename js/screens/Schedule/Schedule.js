import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import ScheduleList from '../../components/ScheduleList';
import styles from './styles';

const Schedule = ({allSessions, navigation}) => {
  console.log(allSessions);
  return (
    <View>
      {allSessions.length !== 0 && (
        <ScheduleList allSessions={allSessions} navigation={navigation} />
      )}
    </View>
  );
};

export default Schedule;

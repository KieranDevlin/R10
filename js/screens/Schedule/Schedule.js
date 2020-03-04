import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import ScheduleList from '../../components/ScheduleList';
import {useQuery} from '@apollo/react-hooks';
import styles from './styles';
import {formatSessionData} from './helpers/formatSessionData';
import {ALL_SESSIONS} from '../../config/queries';

const Schedule = ({navigation}) => {
  const {loading, error, data} = useQuery(ALL_SESSIONS);

  if (loading)
    return (
      <View style={styles.fullScreen}>
        <ActivityIndicator />
      </View>
    );
  if (error)
    return (
      <View style={styles.fullScreen}>
        <Text>Error </Text>
      </View>
    );
  if (data) {
    const allSessions = formatSessionData(data.allSessions);
    return (
      <View>
        {allSessions.length !== 0 && (
          <ScheduleList allSessions={allSessions} navigation={navigation} />
        )}
      </View>
    );
  }
};

export default Schedule;

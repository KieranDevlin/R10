import React from 'react';
import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import ScheduleList from '../../components/ScheduleList';
import {useQuery} from '@apollo/react-hooks';
import styles from './styles';
import {formatSessionData} from './helpers/formatSessionData';
import {ALL_SESSIONS_MAIN} from '../../config/queries';

const Schedule = ({navigation}) => {
  const {loading, error, data} = useQuery(ALL_SESSIONS_MAIN);

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
    console.log(allSessions);
    return (
      <View>
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
        {allSessions.length !== 0 && <ScheduleList allSessions={allSessions} />}
      </View>
    );
  }
};

export default Schedule;

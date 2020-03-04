import React from 'react';
import {Text, View} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {SINGLE_SESSION} from '../../config/queries';
import styles from './styles';
import moment from 'moment';
const Session = ({item}) => {
  // const {loading, error, data} = useQuery(SINGLE_SESSION, {
  //   variables: {id},
  // });

  // if (loading)
  //   return (
  //     <View style={styles.fullScreen}>
  //       <ActivityIndicator />
  //     </View>
  //   );
  // if (error)
  //   return (
  //     <View style={styles.fullScreen}>
  //       <Text>Error </Text>
  //     </View>
  //   );
  // if (data) {
  //   const allSessions = formatSessionData(data.allSessions);
  return (
    <View style={styles.session}>
      <Text style={styles.location}>{item.location}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.time}>{moment(item.startTime).format('h:mm A')}</Text>
      <Text>{item.description}</Text>
      <Text>{item.speaker.name}</Text>
      {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Session');
          }}>
          <Text>Go to session</Text>
        </TouchableOpacity> */}
      {/* <TouchableOpacity
          onPress={() => {
            navigation.navigate('Speaker');
          }}>
          <Text>Go to Speaker</Text>
        </TouchableOpacity> */}
      {/* {allSessions.length !== 0 && (
          <ScheduleList allSessions={allSessions} navigation={navigation} />
        )} */}
    </View>
  );
  // }
};

export default Session;

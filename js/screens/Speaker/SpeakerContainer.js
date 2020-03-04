import React, {Component} from 'react';
import Speaker from './Speaker';
import {SafeAreaView, ActivityIndicator, View, Text} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {SINGLE_SPEAKER} from '../../config/queries';
import styles from './styles';

const SpeakerContainer = ({route, navigation}) => {
  const {loading, error, data} = useQuery(SINGLE_SPEAKER, {
    variables: {id: route.params.id},
  });

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
    return <Speaker speaker={data.Speaker} navigation={navigation} />;
  }
};

export default SpeakerContainer;

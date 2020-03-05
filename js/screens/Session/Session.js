import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import styles from './styles';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
const Session = ({
  item,
  navigation,
  addFaveSession,
  removeFaveSession,
  faveIds,
}) => {
  return (
    <View style={styles.root}>
      <View style={styles.session}>
        <Text style={styles.location}>{item.location}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.time}>
          {moment(item.startTime).format('h:mm A')}
        </Text>
        <Text style={styles.desc}>{item.description}</Text>
        <View style={styles.container}>
          <Text style={styles.location}>Presented by:</Text>

          <View style={styles.speakerContainer}>
            <Image
              style={styles.avatar}
              source={{uri: `${item.speaker.image}`}}
            />

            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Speaker', {id: item.speaker.id});
              }}>
              <Text style={styles.speakerName}>{item.speaker.name}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            addFaveSession(item.id);
          }}>
          <View style={styles.button}>
            <LinearGradient
              colors={['#9963ea', '#8797D6']}
              start={{x: 0.0, y: 1.0}}
              end={{x: 1.0, y: 0.0}}
              style={[
                StyleSheet.absoluteFill,
                {
                  height: '100%',
                  width: '100%',
                  borderRadius: 50,
                },
              ]}
            />
            <Text style={styles.buttonText}>Add to Faves</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Session;

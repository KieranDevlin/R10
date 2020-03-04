import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Speaker = ({speaker, navigation}) => {
  return (
    <View style={styles.root}>
      <SafeAreaView>
        <View style={styles.aboutContainer}>
          <TouchableOpacity
            style={styles.close}
            onPress={() => navigation.goBack()}>
            <Icon name="close" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.about}>About the Speaker</Text>
        </View>
      </SafeAreaView>
      <View style={styles.speakerContainer}>
        <Image style={styles.avatar} source={{uri: `${speaker.image}`}} />
        <Text style={styles.name}>{speaker.name}</Text>
        <Text style={styles.bio}>{speaker.bio}</Text>

        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${speaker.url}`).catch(err =>
              console.error('An error occurred', err),
            );
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
            <Text style={styles.buttonText}>Read More on Wikipedia</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Speaker;

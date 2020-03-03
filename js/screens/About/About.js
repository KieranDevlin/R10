import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Image,
  SectionList,
} from 'react-native';
import styles from './styles';

const About = () => {
  return (
    <>
      <View style={styles.title}>
        <Text>About</Text>
      </View>
      <View style={styles.header}>
        <Image
          //   style={{width: 50, height: 50}}
          source={require('../../assets/images/r10_logo.png')}
        />
      </View>
      <View style={styles.content}>
        <Text>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text>Date &amp; Venue</Text>
        <Text>
          The R10 conference will take place on Saturday, December 8, 2018 in
          Vancovuer, BC.
        </Text>
        <Text>Code of Conduct</Text>
        <Text>&copy; RED Academy 2017</Text>
      </View>
    </>
  );
};

export default About;

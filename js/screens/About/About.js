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

const About = ({data}) => {
  console.log(data);
  return (
    <View style={styles.root}>
      <View style={styles.header}>
        <Image source={require('../../assets/images/r10_logo.png')} />
      </View>
      <View style={styles.content}>
        <Text style={styles.text}>
          R10 is a conference that focuses on just about any topic related to
          dev.
        </Text>
        <Text style={styles.title}>Date &amp; Venue</Text>
        <Text style={styles.text}>
          The R10 conference will take place on Saturday, December 8, 2018 in
          Vancovuer, BC.
        </Text>
        <Text style={styles.title}>Code of Conduct</Text>
        {data?.allConducts.map(singleCode => {
          // TODO :return single code of conduct component here
        })}
      </View>
      <Text style={styles.text}>&copy; RED Academy 2017</Text>
    </View>
  );
};

export default About;

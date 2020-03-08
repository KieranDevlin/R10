import React from 'react';
import {
  Animated,
  Text,
  View,
  Image,
  TouchableOpacity,
  LayoutAnimation,
  ScrollView,
} from 'react-native';
import styles from './styles';
import SingleConduct from '../../components/SingleConduct';
const About = ({data}) => {
  return (
    <ScrollView style={styles.root}>
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

        {data.allConducts.map(conduct => (
          <SingleConduct conduct={conduct} />
        ))}
      </View>

      <Text style={styles.text}>&copy; RED Academy 2017</Text>
    </ScrollView>
  );
};

export default About;

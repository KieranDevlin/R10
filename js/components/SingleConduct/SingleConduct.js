import React from 'react';
import styles from './styles';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  UIManager,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const SingleConduct = ({conduct}) => {
  const [toggleExpand, setToggleExpand] = React.useState(-1);
  const [spinvalue] = React.useState(new Animated.Value(0));
  return (
    <View key={conduct.id}>
      <TouchableOpacity
        onPress={() => {
          LayoutAnimation.easeInEaseOut();
          setToggleExpand(toggleExpand * -1);
        }}
        style={styles.conductButton}>
        <Animated.Text style={'insert rotate here'}>
          <Icon name="plus" style={styles.icon} />
        </Animated.Text>
        <Text style={styles.conduct}>{conduct.title}</Text>
      </TouchableOpacity>
      <Text style={{height: toggleExpand}}>{conduct.description}</Text>
    </View>
  );
};

export default SingleConduct;

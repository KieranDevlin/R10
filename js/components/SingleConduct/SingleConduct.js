import React from 'react';
import styles from './styles';
import {
  Text,
  View,
  TouchableOpacity,
  Animated,
  LayoutAnimation,
  UIManager,
  Easing,
  interpolate,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const SingleConduct = ({conduct}) => {
  const [toggleExpand, setToggleExpand] = React.useState(true);
  const [toggleOpacity, setToggleOpacity] = React.useState(true);
  const [height, setHeight] = React.useState(0);
  const [spinValue] = React.useState(new Animated.Value(0));
  const [opacityValue] = React.useState(new Animated.Value(1));

  const animate = () => {
    setToggleOpacity(!toggleOpacity);
    spinValue.setValue(0);
    opacityValue.setValue(0);
    //Spin animation
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 400,
      easing: Easing.linear,
    }).start();
    //Opacity animation
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 300,
      easing: Easing.easeInEaseOut,
    }).start();
  };
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const opacity = opacityValue.interpolate(
    toggleOpacity
      ? {
          inputRange: [0, 1],
          outputRange: [0, 1],
        }
      : {
          inputRange: [0, 1],
          outputRange: [1, 0],
        },
  );
  const textOpacity = opacityValue.interpolate(
    toggleOpacity
      ? {
          inputRange: [0, 1],
          outputRange: [1, 0],
        }
      : {
          inputRange: [0, 1],
          outputRange: [0, 1],
        },
  );

  return (
    <View key={conduct.id}>
      <TouchableOpacity
        onPress={() => {
          animate();
          LayoutAnimation.easeInEaseOut();
          setToggleExpand(!toggleExpand);
          toggleExpand ? setHeight('auto') : setHeight(0);
        }}
        style={styles.conductButton}>
        <Animated.View
          style={{
            transform: [{rotate: spin}],
            opacity: opacity,
            position: 'relative',
          }}>
          <Icon name="plus" style={styles.icon} />
        </Animated.View>
        <Icon name="minus" style={styles.minus} />
        <Text style={styles.conduct}>{conduct.title}</Text>
      </TouchableOpacity>
      <Animated.View style={{opacity: textOpacity}}>
        <Text style={{height: height}}>{conduct.description}</Text>
      </Animated.View>
    </View>
  );
};

export default SingleConduct;

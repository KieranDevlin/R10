import React, {Component} from 'react';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import AboutContainer from './screens/About';
export default class App extends Component {
  constructor(props) {
    super(props),
      (this.state = {
        isLoading: false,
      });
  }

  componentDidMount = () => {
    this.setState({isLoading: true});

    setTimeout(() => {
      this.setState({isLoading: false});
    }, 2000);
  };

  render() {
    if (this.state.isLoading) {
      return (
        <SafeAreaView>
          <ActivityIndicator animating={true} size="small" color="black" />
        </SafeAreaView>
      );
    } else {
      return (
        <>
          <SafeAreaView>
            {/* <View style={styles.app}>
            <Text>About</Text>
          </View> */}
            <View style={styles.app}>
              <AboutContainer />
            </View>
          </SafeAreaView>
        </>
      );
    }
  }
}

const styles = StyleSheet.create({
  app: {
    padding: 16,
    // backgroundColor: 'red',
  },
});

import React, {Component} from 'react';
import Schedule from './Schedule';
import {SafeAreaView, ActivityIndicator} from 'react-native';
class ScheduleContainer extends Component {
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
      return <Schedule navigation={this.props.navigation} />;
    }
  }
}

export default ScheduleContainer;

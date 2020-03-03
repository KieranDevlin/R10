import React, {Component} from 'react';
import Faves from './Faves';
import {SafeAreaView, ActivityIndicator} from 'react-native';

class FavesContainer extends Component {
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
      return <Faves navigation={this.props.navigation} />;
    }
  }
}

export default FavesContainer;

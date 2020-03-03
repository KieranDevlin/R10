import React, {Component} from 'react';
import Map from './Map';
import {SafeAreaView, ActivityIndicator} from 'react-native';
class MapContainer extends Component {
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
      return <Map />;
    }
  }
}

export default MapContainer;

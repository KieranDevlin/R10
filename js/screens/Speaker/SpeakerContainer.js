import React, {Component} from 'react';
import {Query} from 'react-apollo';
import Speaker from './Speaker';
import {SafeAreaView, ActivityIndicator, View, Text} from 'react-native';
import {SINGLE_SPEAKER} from '../../config/queries';
import styles from './styles';
import Loader from '../../components/Loader';

class SpeakerContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Query
        query={SINGLE_SPEAKER}
        variables={{id: this.props.route.params.id}}>
        {({data, loading}) => {
          if (loading) return <Loader />;

          if (data) {
            return (
              <Speaker
                speaker={data.Speaker}
                navigation={this.props.navigation}
              />
            );
          }
        }}
      </Query>
    );
  }
}

export default SpeakerContainer;

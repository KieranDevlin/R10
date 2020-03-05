import React, {Component} from 'react';
import Loader from '../../components/Loader';
import Schedule from './Schedule';
import {Query} from 'react-apollo';
import {ALL_SESSIONS} from '../../config/queries';
import {formatSessionData} from './helpers/formatSessionData';

class ScheduleContainer extends Component {
  render() {
    return (
      <Query query={ALL_SESSIONS}>
        {({loading, data}) => {
          if (loading) return <Loader />;

          if (data) {
            const allSessions = formatSessionData(data.allSessions);
            return (
              <Schedule
                allSessions={allSessions}
                navigation={this.props.navigation}
              />
            );
          }
        }}
      </Query>
    );
  }
}

export default ScheduleContainer;

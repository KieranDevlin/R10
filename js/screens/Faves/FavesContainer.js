import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Faves from './Faves';
import {Query} from 'react-apollo';
import {ALL_FAVE_SESSIONS} from '../../config/queries';
import {formatSessionData} from './helpers/formatSessionData';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';
import styles from './styles';
class FavesContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <Query query={ALL_FAVE_SESSIONS}>
            {({loading, data}) => {
              if (loading) return <Loader />;

              if (data) {
                const faves = data.allSessions.filter(session =>
                  value.faveIds.includes(session.id),
                );

                const allSessions = formatSessionData(faves);

                return allSessions.length > 0 ? (
                  <Faves
                    allSessions={allSessions}
                    navigation={this.props.navigation}
                    faveIds={value.faveIds}
                  />
                ) : (
                  <View style={styles.root}>
                    <Text style={styles.font}>
                      You haven't faved any sessions yet.
                    </Text>
                  </View>
                );
              }
            }}
          </Query>
        )}
      </FavesContext.Consumer>
    );
  }
}

export default FavesContainer;

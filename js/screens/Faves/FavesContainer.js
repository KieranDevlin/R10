import React, {Component} from 'react';
import Faves from './Faves';
import {Query} from 'react-apollo';
import {ALL_FAVE_SESSIONS} from '../../config/queries';
import {formatSessionData} from './helpers/formatSessionData';
import {FavesContext} from '../../context/FavesContext';
import Loader from '../../components/Loader';
class FavesContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <Query
            query={ALL_FAVE_SESSIONS}
            variables={{filter: {id_not_in: value.faveIds}}}>
            {({loading, data}) => {
              if (loading) return <Loader />;

              if (data) {
                const allSessions = formatSessionData(data.allSessions);

                return (
                  <Faves
                    allSessions={allSessions}
                    navigation={this.props.navigation}
                    faveIds={value.faveIds}
                  />
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

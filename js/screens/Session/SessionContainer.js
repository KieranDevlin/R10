import React, {Component} from 'react';
import Session from './Session';
import {FavesContext} from '../../context/FavesContext';

class SessionContainer extends Component {
  render() {
    return (
      <FavesContext.Consumer>
        {value => (
          <Session
            item={this.props.route.params.item}
            navigation={this.props.navigation}
            addFaveSession={value.addFaveSession}
            removeFaveSession={value.removeFaveSession}
            faveIds={value.faveIds}
          />
        )}
      </FavesContext.Consumer>
    );
  }
}

export default SessionContainer;

import React, {Component} from 'react';
import {
  getAllFaves,
  addFaveSession,
  removeFaveSession,
} from '../../config/models';

export const FavesContext = React.createContext();

class FavesProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      faveIds: [],
    };
  }
  getFavedSessionIds = async () => {
    const faves = await getAllFaves();
    // we only want the ID key, not the whole object
    const ids = faves.map(f => f[0]);
    // update state to use in provider
    this.setState({faveIds: ids});
  };

  addFaveSession = async sessionId => {
    const newFav = await addFaveSession(sessionId);
    if (newFav) {
      this.setState({faveIds: {faveIds: [...this.state.faveIds, newFav.id]}});
    }
    this.getFavedSessionIds();
  };

  removeFaveSession = async sessionId => {
    await removeFaveSession(sessionId);
    this.getFavedSessionIds();
  };

  componentDidMount = () => {
    this.getFavedSessionIds();
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaveSession,
          removeFaveSession: this.removeFaveSession,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export default FavesProvider;

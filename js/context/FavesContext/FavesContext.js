import React, {Component} from 'react';
// import {exp} from 'react-native-reanimated';
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
    try {
      const faves = await getAllFaves();
      // we only want the ID key, not the whole object
      const ids = faves.map(f => f[0]);
      // update state to use in provider
      this.setState({faveIds: ids});
    } catch (e) {
      throw e;
    }
  };

  addFaves = async sessionId => {
    try {
      const newFav = await addFaveSession(sessionId);
      if (newFav) {
        this.setState({faveIds: {faveIds: [...this.state.faveIds, newFav.id]}});
      }
      this.getFavedSessionIds();
    } catch (e) {
      throw e;
    }
  };

  removeFaves = async sessionId => {
    try {
      await removeFaveSession(sessionId);
      this.getFavedSessionIds();
    } catch (e) {
      throw e;
    }
  };

  componentDidMount = () => {
    this.getFavedSessionIds();
  };

  render() {
    return (
      <FavesContext.Provider
        value={{
          ...this.state,
          addFaveSession: this.addFaves,
          removeFaveSession: this.removeFaves,
        }}>
        {this.props.children}
      </FavesContext.Provider>
    );
  }
}

export default FavesProvider;

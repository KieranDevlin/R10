import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStackScreen from './navigation';
import client from './config/api';
import {ApolloProvider} from '@apollo/react-hooks';
import FavesProvider from './context/FavesContext';
export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ApolloProvider client={client}>
        <FavesProvider>
          <NavigationContainer>
            <RootStackScreen />
          </NavigationContainer>
        </FavesProvider>
      </ApolloProvider>
    );
  }
}

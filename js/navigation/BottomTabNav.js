import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutContainer from '../screens/About';
import FavesContainer from '../screens/Faves';
import MapContainer from '../screens/Map';
import ScheduleContainer from '../screens/Schedule';
import SessionContainer from '../screens/Session';

const ScheduleStack = createStackNavigator();
const MapStack = createStackNavigator();
const FavesStack = createStackNavigator();
const AboutStack = createStackNavigator();

const ScheduleStackScreens = props => (
  <ScheduleStack.Navigator>
    <ScheduleStack.Screen name="Schedule" component={ScheduleContainer} />
    <ScheduleStack.Screen name="Session" component={SessionContainer} />
  </ScheduleStack.Navigator>
);
const MapStackScreens = props => (
  <MapStack.Navigator>
    <MapStack.Screen name="Map" component={MapContainer} />
  </MapStack.Navigator>
);
const FavesStackScreens = props => (
  <FavesStack.Navigator>
    <FavesStack.Screen name="Faves" component={FavesContainer} />
    <FavesStack.Screen name="Session" component={SessionContainer} />
  </FavesStack.Navigator>
);
const AboutStackScreens = props => (
  <AboutStack.Navigator>
    <AboutStack.Screen name="About" component={AboutContainer} />
  </AboutStack.Navigator>
);

const BottomTabNav = createBottomTabNavigator();

const BottomTabNavScrens = props => (
  <BottomTabNav.Navigator
    tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 10,
      },
      style: {
        backgroundColor: '#000000',
      },
    }}>
    <BottomTabNav.Screen name="Schedule" component={ScheduleStackScreens} />
    <BottomTabNav.Screen name="Map" component={MapStackScreens} />
    <BottomTabNav.Screen name="Faves" component={FavesStackScreens} />
    <BottomTabNav.Screen name="About" component={AboutStackScreens} />
  </BottomTabNav.Navigator>
);

export default BottomTabNavScrens;

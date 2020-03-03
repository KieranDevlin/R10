import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutContainer from '../screens/About';
import FavesContainer from '../screens/Faves';
import MapContainer from '../screens/Map';
import ScheduleContainer from '../screens/Schedule';
import SessionContainer from '../screens/Session';
import {sharedScreenOptions} from './config';
import Ionicon from 'react-native-vector-icons/Ionicons';

const ScheduleStack = createStackNavigator();
const MapStack = createStackNavigator();
const FavesStack = createStackNavigator();
const AboutStack = createStackNavigator();

const ScheduleStackScreens = props => (
  <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
    <ScheduleStack.Screen name="Schedule" component={ScheduleContainer} />
    <ScheduleStack.Screen name="Session" component={SessionContainer} />
  </ScheduleStack.Navigator>
);
const MapStackScreens = props => (
  <MapStack.Navigator screenOptions={sharedScreenOptions}>
    <MapStack.Screen name="Map" component={MapContainer} />
  </MapStack.Navigator>
);
const FavesStackScreens = props => (
  <FavesStack.Navigator screenOptions={sharedScreenOptions}>
    <FavesStack.Screen name="Faves" component={FavesContainer} />
    <FavesStack.Screen name="Session" component={SessionContainer} />
  </FavesStack.Navigator>
);
const AboutStackScreens = props => (
  <AboutStack.Navigator screenOptions={sharedScreenOptions}>
    <AboutStack.Screen name="About" component={AboutContainer} />
  </AboutStack.Navigator>
);

const BottomTabNav = createBottomTabNavigator();

const BottomTabNavScrens = props => (
  <BottomTabNav.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar-today' : 'calendar-today-outlined';
        }

        return <Ionicon name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: '#ffffff',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 10,
        fontFamily: 'Montserrat',
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

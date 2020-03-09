import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AboutContainer from '../screens/About';
import FavesContainer from '../screens/Faves';
import MapContainer from '../screens/Map';
import ScheduleContainer from '../screens/Schedule';
import SessionContainer from '../screens/Session';
import {sharedScreenOptions} from './config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create individual stacks for each screen
const ScheduleStack = createStackNavigator();
const MapStack = createStackNavigator();
const FavesStack = createStackNavigator();
const AboutStack = createStackNavigator();

const ScheduleStackScreens = () => (
  <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
    <ScheduleStack.Screen name="Schedule" component={ScheduleContainer} />
    <ScheduleStack.Screen
      name="Session"
      component={SessionContainer}
      options={{
        headerTintColor: 'white',
      }}
    />
  </ScheduleStack.Navigator>
);
const MapStackScreens = () => (
  <MapStack.Navigator screenOptions={sharedScreenOptions}>
    <MapStack.Screen name="Map" component={MapContainer} />
  </MapStack.Navigator>
);
const FavesStackScreens = () => (
  <FavesStack.Navigator screenOptions={sharedScreenOptions}>
    <FavesStack.Screen name="Faves" component={FavesContainer} />
    <FavesStack.Screen
      name="Session"
      component={SessionContainer}
      options={{
        headerTintColor: 'white',
      }}
    />
  </FavesStack.Navigator>
);
const AboutStackScreens = () => (
  <AboutStack.Navigator screenOptions={sharedScreenOptions}>
    <AboutStack.Screen name="About" component={AboutContainer} />
  </AboutStack.Navigator>
);

const BottomTabNav = createBottomTabNavigator();

// add icons for each route
const BottomTabNavScrens = () => (
  <BottomTabNav.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;

        if (route.name === 'Schedule') {
          iconName = focused ? 'calendar' : 'calendar-blank-outline';
        } else if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        } else if (route.name === 'Faves') {
          iconName = focused ? 'heart' : 'heart-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'information' : 'information-outline';
        }

        return <Icon name={iconName} size={size} color={color} />;
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

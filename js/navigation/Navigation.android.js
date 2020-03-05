import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutContainer from '../screens/About';
import FavesContainer from '../screens/Faves';
import MapContainer from '../screens/Map';
import ScheduleContainer from '../screens/Schedule';
import SessionContainer from '../screens/Session';
import {sharedScreenOptions} from './config';

const ScheduleStack = createStackNavigator();
const MapStack = createStackNavigator();
const FaveStack = createStackNavigator();
const AboutStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const ScheduleStackScreens = props => (
  <ScheduleStack.Navigator screenOptions={sharedScreenOptions}>
    <ScheduleStack.Screen name="Schedule" component={ScheduleContainer} />
    <ScheduleStack.Screen name="Session" component={SessionContainer} />
  </ScheduleStack.Navigator>
);
const MapStackScreens = props => (
  <MapStack.Navigator screenOptions={sharedScreenOptions}>
    <MapStack.Screen name="Maps" component={MapContainer} />
  </MapStack.Navigator>
);
const FaveStackScreens = props => (
  <FaveStack.Navigator
    initialRouteName="Faves"
    screenOptions={sharedScreenOptions}>
    <FaveStack.Screen name="Faves" component={FavesContainer} />
    <FaveStack.Screen name="Session" component={SessionContainer} />
  </FaveStack.Navigator>
);
const AboutStackScreens = props => (
  <AboutStack.Navigator screenOptions={sharedScreenOptions}>
    <AboutStack.Screen name="About" component={AboutContainer} />
  </AboutStack.Navigator>
);
const DrawerNav = props => (
  <Drawer.Navigator>
    <Drawer.Screen name="Schedule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Maps" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FaveStackScreens} />
    <Drawer.Screen name="Session" component={AboutStackScreens} />
  </Drawer.Navigator>
);
export default DrawerNav;

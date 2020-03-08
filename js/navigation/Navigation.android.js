import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AboutContainer from '../screens/About';
import FavesContainer from '../screens/Faves';
import MapContainer from '../screens/Map';
import ScheduleContainer from '../screens/Schedule';
import SessionContainer from '../screens/Session';
import {sharedScreenOptions} from './config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
  <Drawer.Navigator
    screenOptions={({route}) => ({
      drawerIcon: ({focused, color, size}) => {
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
    drawerContentOptions={{
      activeTintColor: '#9963ea',
      activeBackgroundColor: '#e6e6e6',
      inactiveTintColor: '#999999',
      labelStyle: {
        fontSize: 16,
        fontFamily: 'Montserrat',
        fontWeight: '700',
      },
      style: {
        backgroundColor: '#ffffff',
      },
    }}>
    <Drawer.Screen name="Schedule" component={ScheduleStackScreens} />
    <Drawer.Screen name="Map" component={MapStackScreens} />
    <Drawer.Screen name="Faves" component={FaveStackScreens} />
    <Drawer.Screen name="About" component={AboutStackScreens} />
  </Drawer.Navigator>
);
export default DrawerNav;

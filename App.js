import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Feed from './screens/Feed';
import UserDetails from './screens/UserDetails';

const Tab1Stack = createStackNavigator({
  Main: Feed,
  Details: UserDetails,
},{
  initialRouteName: 'Main',
});

export default createBottomTabNavigator(
  {
    Tab1: Tab1Stack
  }
);

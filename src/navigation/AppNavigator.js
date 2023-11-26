import {View, Text} from 'react-native';
import React from 'react';
import {AuthContext} from '../context/Context';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './tab/HomeTabNavigator';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {/* <NoInterNetScreen /> */}
      {/* <LoadingModal /> */}
      <HomeTabNavigator />
    </NavigationContainer>
  );
};

export default AppNavigator;

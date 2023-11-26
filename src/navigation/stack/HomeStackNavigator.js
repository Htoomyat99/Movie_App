import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from '../../pages/Favorite/FavoriteScreen';
import FavoriteDetailScreen from '../../pages/Favorite/FavoriteDetailScreen';
import HomeScreen from '../../pages/Home/HomeScreen';
import HomeDetailScreen from '../../pages/Home/HomeDetailScreen';

const Stack = createNativeStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        // gestureDirection: 'horizontal',
        // gestureEnabled: true,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
};

export default HomeStackNavigator;

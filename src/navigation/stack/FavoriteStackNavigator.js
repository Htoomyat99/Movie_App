import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import FavoriteScreen from '../../pages/Favorite/FavoriteScreen';
import FavoriteDetailScreen from '../../pages/Favorite/FavoriteDetailScreen';
import HomeDetailScreen from '../../pages/Home/HomeDetailScreen';

const Stack = createNativeStackNavigator();

const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        // gestureDirection: 'horizontal',
        // gestureEnabled: true,
      }}>
      <Stack.Screen name="Favorite" component={FavoriteScreen} />
      <Stack.Screen name="FavoriteDetail" component={FavoriteDetailScreen} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;

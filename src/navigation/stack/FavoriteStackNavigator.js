import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from '../../pages/Favorite/FavoriteScreen';
import FavoriteDetailScreen from '../../pages/Favorite/FavoriteDetailScreen';

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
    </Stack.Navigator>
  );
};

export default FavoriteStackNavigator;

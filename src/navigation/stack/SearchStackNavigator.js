import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FavoriteScreen from '../../pages/Favorite/FavoriteScreen';
import FavoriteDetailScreen from '../../pages/Favorite/FavoriteDetailScreen';
import SearchScreen from '../../pages/Search/SearchScreen';
import SearchDetailScreen from '../../pages/Search/SearchDetailScreen';

const Stack = createNativeStackNavigator();

const SearchStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerBackTitleVisible: false,
        // gestureDirection: 'horizontal',
        // gestureEnabled: true,
      }}>
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="SearchDetail" component={SearchDetailScreen} />
    </Stack.Navigator>
  );
};

export default SearchStackNavigator;

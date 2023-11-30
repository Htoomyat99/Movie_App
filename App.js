import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <AppNavigator />
      <Toast />
    </GestureHandlerRootView>
  );
};

export default App;

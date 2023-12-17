import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Toast from 'react-native-toast-message';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <AppNavigator />
        <Toast />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;

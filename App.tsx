import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{flex: 1}}>
        <AppNavigator />
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
};

export default App;

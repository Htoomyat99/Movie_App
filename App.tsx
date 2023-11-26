import {View, Text} from 'react-native';
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default App;

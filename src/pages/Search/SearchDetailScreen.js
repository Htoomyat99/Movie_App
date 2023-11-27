import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {movieColor} from '../../utils/theme/color';

const SearchDetailScreen = () => {
  return (
    <View>
      <StatusBar
        backgroundColor={movieColor.primary}
        barStyle={'dark-content'}
      />

      <Text>SearchDetail</Text>
    </View>
  );
};

export default SearchDetailScreen;

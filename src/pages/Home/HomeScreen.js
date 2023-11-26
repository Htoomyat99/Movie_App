import {View, Text} from 'react-native';
import React from 'react';
import {movieColor} from '../../utils/theme/color';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: movieColor.white}}>
      <Text style={{backgroundColor: movieColor.white}}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const SearchScreen = ({navigation}) => {
  return (
    <View>
      <Text>SearchScreen</Text>
      <TouchableOpacity
        style={{backgroundColor: '#ddd'}}
        onPress={() => navigation.navigate('SearchDetail')}>
        <Text>Go Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchScreen;

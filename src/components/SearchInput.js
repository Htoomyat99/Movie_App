import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//style
import style from './style';

//icons
import SearchIcon from '../../assets/icons/SearchIcon';

const SearchInput = props => {
  return (
    <View style={style.inputContainer}>
      <SearchIcon width={wp(4.2)} height={wp(4.2)} fill="grey" />
      <TextInput
        style={style.textInput}
        placeholder="Search"
        value={props.inputValue}
        onChangeText={props.onChangeText}
        placeholderTextColor="#bbb"
      />
    </View>
  );
};

export default SearchInput;

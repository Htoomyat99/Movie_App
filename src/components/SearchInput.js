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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {movieColor} from '../utils/theme/color';

const SearchInput = props => {
  return (
    <View style={style.inputContainer}>
      <View style={{marginLeft: wp(3)}}>
        <SearchIcon width={wp(4.2)} height={wp(4.2)} fill="grey" />
      </View>

      <TextInput
        style={style.textInput}
        placeholder="Search"
        value={props.inputValue}
        onChangeText={props.onChangeText}
        placeholderTextColor="#bbb"
      />

      <TouchableOpacity
        style={[
          style.btnContainer,
          {
            backgroundColor: props.inputValue ? movieColor.primary : null,
          },
        ]}
        disabled={!props.inputValue}
        activeOpacity={0.8}
        onPress={props.onPress}>
        <Text style={style.btnText}>Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

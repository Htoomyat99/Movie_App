import {View, Text, TouchableOpacity, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import style from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchIcon from '../../../assets/icons/SearchIcon';
import SearchInput from '../../components/SearchInput';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieList';

const SearchScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const onChangeText = text => {
    setInputValue(text);
    console.log('inputValue >>>', inputValue);
  };

  const renderItem = (item, index) => {
    return <MovieList isFavorite={false} />;
  };

  return (
    <View style={{flex: 1}}>
      {/* SearchInput */}
      <SearchInput inputValue={inputValue} onChangeText={onChangeText} />

      <Text style={style.headerText}>Popular Search</Text>

      {/* movieList */}
      <FlatList
        style={style.flatList}
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchScreen;

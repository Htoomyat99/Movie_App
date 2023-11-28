import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

//style
import style from './style';

//context
import {AuthContext} from '../../context/Context';

//utils
import {movieColor} from '../../utils/theme/color';
import {NetErrorToast} from '../../utils/NetErrorToast';

//components
import SearchInput from '../../components/SearchInput';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieRenderComponent';

const SearchScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');

  const {net} = useContext(AuthContext);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, []);

  const onChangeText = text => {
    setInputValue(text);
    console.log('inputValue >>>', inputValue);
  };

  const goSearchDetail = ({item}) => {
    navigation.navigate('HomeDetail', {data: item});
  };

  const renderItem = (item, index) => {
    return (
      <MovieList isFavorite={false} onPress={() => goSearchDetail(item)} />
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

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

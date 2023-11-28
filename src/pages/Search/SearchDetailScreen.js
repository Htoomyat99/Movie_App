import {View, Text, StatusBar, ToastAndroid} from 'react-native';
import React, {useContext} from 'react';
import {movieColor} from '../../utils/theme/color';
import {AuthContext} from '../../context/Context';

const SearchDetailScreen = ({route, navigation}) => {
  const {data} = route.params;
  const {isFavorite, changeIsFavorite} = useContext(AuthContext);

  const playMovieAction = () => {
    console.log('movie play');
  };

  const playTrailerAction = () => {
    console.log('trailer play');
  };

  const backAction = () => {
    navigation.goBack();
  };

  const favoriteAction = () => {
    changeIsFavorite(!isFavorite);
    if (!isFavorite) {
      ToastAndroid.show('Add to Favorite Successfully', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Remove to Favorite Successfully', ToastAndroid.SHORT);
    }
  };

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

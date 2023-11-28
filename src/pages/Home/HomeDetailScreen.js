import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useContext, useState} from 'react';

//components
import HeaderComponent from '../../components/MovieDetail/HeaderComponent';
import BodyComponent from '../../components/MovieDetail/BodyComponent';
import {AuthContext} from '../../context/Context';

const HomeDetailScreen = ({route, navigation}) => {
  // const {data} = route.params;
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
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <HeaderComponent
        playMovieAction={playMovieAction}
        playTrailerAction={playTrailerAction}
        backAction={backAction}
        favoriteAction={favoriteAction}
        isFavorite={isFavorite}
      />

      <BodyComponent />
    </View>
  );
};

export default HomeDetailScreen;

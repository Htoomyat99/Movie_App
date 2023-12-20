import {View, Text, StatusBar, ToastAndroid} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

//context
import {AuthContext} from '../../context/Context';

//components
import HeaderComponent from '../../components/MovieDetail/HeaderComponent';
import BodyComponent from '../../components/MovieDetail/BodyComponent';

//utils
import {NetErrorToast} from '../../utils/NetErrorToast';
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite} from '../../store/favorite/favoriteSlice';
import appStorage from '../../utils/appStorage';

const HomeDetailScreen = ({route, navigation}) => {
  const {data} = route.params;
  const {net} = useContext(AuthContext);

  // console.log('movieDetailData >>>', data.id);
  const dispatch = useDispatch();
  const favoriteData = useSelector(state => state.favorite.value);
  const isFavorite = favoriteData.some(htoo => htoo.id == data.id);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, [net]);

  const playMovieAction = () => {
    ToastAndroid.show('Sory, Not available at the moment', ToastAndroid.SHORT);
  };

  const playTrailerAction = () => {
    ToastAndroid.show('Sory, Not available at the moment', ToastAndroid.SHORT);
  };

  const backAction = () => {
    navigation.goBack();
  };

  const favoriteAction = () => {
    dispatch(toggleFavorite(data));
    appStorage.setItem('@isFavorite', isFavorite);
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />

      <HeaderComponent
        playMovieAction={playMovieAction}
        playTrailerAction={playTrailerAction}
        backAction={backAction}
        favoriteAction={favoriteAction}
        data={data}
        isFavorite={isFavorite}
        uri={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
        rating={data.vote_average.toFixed(2)}
        releaseDate={data.release_date.substring(0, 4)}
      />

      <BodyComponent
        genresData={data.genres}
        runtime={data.runtime}
        movieTitle={data.original_title}
        overView={data.overview}
      />
    </View>
  );
};

export default HomeDetailScreen;

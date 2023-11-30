import {View, Text, StatusBar, ToastAndroid} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

//context
import {AuthContext} from '../../context/Context';

//components
import HeaderComponent from '../../components/MovieDetail/HeaderComponent';
import BodyComponent from '../../components/MovieDetail/BodyComponent';

//utils
import {NetErrorToast} from '../../utils/NetErrorToast';

const HomeDetailScreen = ({route, navigation}) => {
  const {data} = route.params;
  const {
    isFavorite,
    changeIsFavorite,
    changeFavoriteList,
    favoriteList,
    net,
    changeUpdateList,
  } = useContext(AuthContext);

  // console.log('movieDetailData >>>', data);

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
    if (favoriteList.length === 0 || favoriteList.length > 0) {
      const foundMovie = favoriteList.find(item => item.id === data.id);
      const updatedMovies = favoriteList.filter(movie => movie.id !== data.id);
      if (foundMovie) {
        changeUpdateList(updatedMovies);
        changeIsFavorite(false);
        ToastAndroid.show(
          'Remove from Favorite Successfully',
          ToastAndroid.SHORT,
        );
      } else {
        changeFavoriteList(data);
        changeIsFavorite(true);
        ToastAndroid.show('Add to Favorite Successfully', ToastAndroid.SHORT);
      }
    }
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

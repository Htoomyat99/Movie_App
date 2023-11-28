import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
  const [popularMovieData, setPopularMovieData] = useState(null);

  const {net} = useContext(AuthContext);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, []);

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjk4ZTAxNWE4MjMzZTE3YzZhNDRiMWRiZDBjNGYyMyIsInN1YiI6IjY1NjQ1ZTI2OGYyNmJjMDBmZjZmYzc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JU34yjlFkF_BO3YmFostPHvZN8BZ0bd678869QXjbbg',
    },
  };

  const fetchPopularMovie = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/popular',
        options,
      );
      const data = await response.json();
      setPopularMovieData(data);
    } catch (error) {
      console.error('Error fetching UpcomingMovieData >>>', error);
    }
  };

  // console.log('data >>>', popularMovieData ? popularMovieData : []);

  const fetchMovieDetail = async movie_id => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}`,
        options,
      );
      const data = await response.json();
      navigation.navigate('HomeDetail', {data: data});
    } catch (error) {
      console.error('Error fetching MovieDetail Data >>>', err);
    }
  };

  const onChangeText = text => {
    setInputValue(text);
    console.log('inputValue >>>', inputValue);
  };

  const goSearchDetail = item => {
    fetchMovieDetail(item.id);
  };

  const renderItem = ({item}, index) => {
    return (
      <View style={{marginBottom: hp(2.5)}}>
        <MovieList
          isFavorite={false}
          onPress={() => goSearchDetail(item)}
          uri={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          movieTitle={item.original_title}
          relaseDate={item.release_date}
          rating={item.vote_average.toFixed(2)}
          popularity={item.popularity}
        />
      </View>
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
      <View style={{marginTop: StatusBar.currentHeight}}>
        <SearchInput inputValue={inputValue} onChangeText={onChangeText} />
      </View>

      <Text style={style.headerText}>Popular Search</Text>

      {/* movieList */}
      <FlatList
        style={style.flatList}
        data={popularMovieData?.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default SearchScreen;

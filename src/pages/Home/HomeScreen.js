import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
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
import SlideImage from '../../components/SlideImage';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieRenderComponent';
import {err} from 'react-native-svg';

const HomeScreen = ({navigation}) => {
  const {net} = useContext(AuthContext);
  const [movieData, setMovieData] = useState(null);
  const [upComingMovieData, setUpcomingMovieData] = useState(null);
  // const [movieDeatilData, setMovieDetailData] = useState(null);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, [net]);

  const goMovieDetail = item => {
    fetchMovieDetail(item.id);
  };

  useEffect(() => {
    fetchMovieData();
    fetchUpcomingMoveiData();
  }, []);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjk4ZTAxNWE4MjMzZTE3YzZhNDRiMWRiZDBjNGYyMyIsInN1YiI6IjY1NjQ1ZTI2OGYyNmJjMDBmZjZmYzc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JU34yjlFkF_BO3YmFostPHvZN8BZ0bd678869QXjbbg',
    },
  };

  const fetchUpcomingMoveiData = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming',
        options,
      );
      const data = await response.json();
      setUpcomingMovieData(data);
    } catch (error) {
      console.error('Error fetching UpcomingMovieData >>>', err);
    }
  };

  const fetchMovieData = async () => {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/movie/top_rated',
        options,
      );
      const data = await response.json();

      // Update the state with the received movie data
      setMovieData(data);
    } catch (error) {
      console.error('Error fetching movie data:', error);
    }
  };

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

  const renderItem = ({item}, index) => {
    return (
      <View style={{marginBottom: hp(2.5)}}>
        <MovieList
          isFavorite={false}
          onPress={() => goMovieDetail(item)}
          movieTitle={item.original_title}
          relaseDate={item.release_date}
          uri={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
          rating={item.vote_average.toFixed(2)}
          popularity={item.popularity}
        />
      </View>
    );
    // console.log('movei>>>', item);
  };

  // console.log(
  //   'UPcomingdata >>',
  //   JSON.stringify(movieData ? movieData.results : 'null'),
  // );

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: movieColor.white,
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <View style={{marginTop: StatusBar.currentHeight}}>
        <SlideImage
          carouselData={upComingMovieData?.results}
          onPress={goMovieDetail}
        />
      </View>

      {/* categoryTitle */}
      <Text style={style.titleText}>Top Rated Movies</Text>

      {/* movieLists */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.flatList}
        data={movieData?.results}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

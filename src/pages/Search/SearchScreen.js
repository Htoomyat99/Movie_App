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
import {FetchGetByToken, fetchPostByToken} from '../../utils/fetchData';
import apiUrl from '../../utils/apiUrl';
import LoadingModalComponent from '../../components/LoadingModal';

const SearchScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [popularMovieData, setPopularMovieData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('Harry Potter');

  const {net} = useContext(AuthContext);

  let controller = new AbortController();
  const signal = controller.signal;

  // console.log('data >>>', popularMovieData ? popularMovieData : []);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, []);

  useEffect(() => {
    fetchPopularMovie();
    fetchMovieSearch();
  }, []);

  const fetchPopularMovie = async () => {
    if (!net) {
      NetErrorToast();
      setIsLoading(false);
      return;
    }
    setIsLoading(true);

    const response = await FetchGetByToken(apiUrl.popular, signal);
    // console.log('popular >>>', response);
    if (response && response.results) {
      setPopularMovieData(response);
      setIsLoading(false);
    } else {
      console.log('error', response.status_message);
      setIsLoading(false);
    }
  };

  const fetchMovieDetail = async movie_id => {
    if (!net) {
      NetErrorToast();
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const response = await FetchGetByToken(movie_id, signal);
    // console.log('response >>>', response);
    if (response) {
      navigation.navigate('HomeDetail', {data: response});
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    } else {
      // console.log('error', response.status_message);
      setIsLoading(false);
    }
  };

  // const fetchMovieSearch = async () => {
  //   let data = {
  //     query: 'text',
  //     include_adult: 'false',
  //   };

  //   if (!net) {
  //     NetErrorToast();
  //     setIsLoading(false);
  //     return;
  //   }
  //   setIsLoading(true);

  //   const response = fetchPostByToken(apiUrl.search, data, signal);
  // };

  const fetchMovieSearch = async () => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjk4ZTAxNWE4MjMzZTE3YzZhNDRiMWRiZDBjNGYyMyIsInN1YiI6IjY1NjQ1ZTI2OGYyNmJjMDBmZjZmYzc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JU34yjlFkF_BO3YmFostPHvZN8BZ0bd678869QXjbbg',
      },
    };

    await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${text}&include_adult=false&language=en-US&page=1`,
      options,
    )
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
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
      <View style={{marginVertical: hp(1.5)}}>
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

  const renderFooter = () => {};

  const ItemSeparatorComponent = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  if (isLoading) {
    return <LoadingModalComponent />;
  }

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
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
};

export default SearchScreen;

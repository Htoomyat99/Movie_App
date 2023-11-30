import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
  ActivityIndicator,
  ToastAndroid,
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
import {fetchGetByToken, fetchPostByToken} from '../../utils/fetchData';
import apiUrl from '../../utils/apiUrl';
import LoadingModalComponent from '../../components/LoadingModal';
import NoDataFound from '../../components/NoDataFound';

const SearchScreen = ({navigation}) => {
  const [inputValue, setInputValue] = useState('');
  const [popularMovieData, setPopularMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [page, setPage] = useState(1);
  const [paginateLoading, setPaginateLoading] = useState(false);

  const {net} = useContext(AuthContext);

  let controller = new AbortController();
  const signal = controller.signal;

  // console.log('data >>>', popularMovieData ? popularMovieData : []);

  useEffect(() => {
    fetchPopularMovie();
  }, []);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, [net]);

  const fetchPopularMovie = async () => {
    if (!net) {
      NetErrorToast();
      setIsLoading(false);
      return;
    }

    setIsLoading(true);

    const response = await fetchGetByToken(
      apiUrl.popular + `?page=${page}`,
      signal,
    );
    // console.log('popular >>>', response);
    if (response && response.results) {
      setPage(prevPage => prevPage + 1);
      const newData = response?.results.slice(0, 10);
      setPopularMovieData(prev => [...prev, ...newData]);
      setIsLoading(false);
      setPaginateLoading(false);
    } else {
      console.log('error', response.status_message);
      setIsLoading(false);
      setPaginateLoading(false);
    }
  };

  const fetchMovieDetail = async movie_id => {
    if (!net) {
      NetErrorToast();
      setIsLoading(false);
      return;
    }
    setIsLoading(true);

    const response = await fetchGetByToken(
      `${apiUrl.movie}${movie_id}`,
      signal,
    );
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

  const onChangeText = text => {
    setInputValue(text);
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
          uri={`https://image.tmdb.org/t/p/w500${
            item.backdrop_path ? item.backdrop_path : item.poster_path
          }`}
          movieTitle={item.original_title}
          relaseDate={item.release_date}
          rating={item.vote_average.toFixed(2)}
          popularity={item.popularity}
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      paginateLoading && (
        <ActivityIndicator size={'medium'} color={movieColor.primary} />
      )
    );
  };

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

  const loadMoreHandler = () => {
    if (!paginateLoading) {
      setPaginateLoading(true);
      fetchPopularMovie();
    }
  };

  const searchHandler = async () => {
    if (!net) {
      NetErrorToast();
      setIsLoading(false);
      return;
    }

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1Zjk4ZTAxNWE4MjMzZTE3YzZhNDRiMWRiZDBjNGYyMyIsInN1YiI6IjY1NjQ1ZTI2OGYyNmJjMDBmZjZmYzc2NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JU34yjlFkF_BO3YmFostPHvZN8BZ0bd678869QXjbbg',
      },
    };

    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en-US&page=1`,
      options,
    )
      .then(response => response.json())
      .then(response => setSearchData(response))
      .catch(err => console.error(err));
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
        <SearchInput
          inputValue={inputValue}
          onChangeText={onChangeText}
          onPress={searchHandler}
        />
      </View>

      <Text style={style.headerText}>Popular Search</Text>

      {/* movieList */}

      {searchData?.results.length <= 0 ? (
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <NoDataFound text={'No Data Found'} />
        </View>
      ) : (
        <FlatList
          style={style.flatList}
          data={searchData != null ? searchData?.results : popularMovieData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={renderFooter}
          ItemSeparatorComponent={ItemSeparatorComponent}
          onEndReached={loadMoreHandler}
        />
      )}

      {isLoading && <LoadingModalComponent />}
    </View>
  );
};

export default SearchScreen;

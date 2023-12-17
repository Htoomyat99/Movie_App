import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import VideoPlayer from 'react-native-video-player';

//style
import style from './style';

//context
import {AuthContext} from '../../context/Context';

//utils
import {movieColor} from '../../utils/theme/color';
import {NetErrorToast} from '../../utils/NetErrorToast';
import {fetchGetByToken} from '../../utils/fetchData';
import apiUrl from '../../utils/apiUrl';

//components
import SlideImage from '../../components/SlideImage';
import MovieList from '../../components/MovieRenderComponent';
import LoadingModalComponent from '../../components/LoadingModal';

const HomeScreen = ({navigation}) => {
  const {net} = useContext(AuthContext);
  const [topRatedMovieData, setTopRatedMovieData] = useState([]);
  const [upComingMovieData, setUpcomingMovieData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [paginateLoading, setPaginateLoading] = useState(false);

  let controller = new AbortController();
  const signal = controller.signal;

  // console.log(
  //   'UPcomingdata >>',
  //   JSON.stringify(movieData ? movieData.results : 'null'),
  // );

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, [net]);

  useEffect(() => {
    fetchTopRatedMovieData();
    fetchUpcomingMoveiData();
  }, []);

  const goMovieDetail = item => {
    fetchMovieDetail(item.id);
  };

  const fetchUpcomingMoveiData = async () => {
    if (!net) {
      NetErrorToast();
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const response = await fetchGetByToken(apiUrl.upcoming, signal);

    if (response && response.results) {
      setUpcomingMovieData(response);
      setIsLoading(false);
    } else {
      console.log('error', response.status_message);
      setIsLoading(false);
    }
  };

  const fetchTopRatedMovieData = async () => {
    if (!net) {
      NetErrorToast();
      setIsLoading(false);
      return;
    }

    const response = await fetchGetByToken(
      apiUrl.top_rated + `?page=${page}`,
      signal,
    );
    // console.log('response >>>', response);
    if (response && response.results) {
      setPage(prevPage => prevPage + 1);
      const newData = response?.results.slice(0, 10);
      setTopRatedMovieData(prev => [...prev, ...newData]);
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
      console.log('error', response.status_message);
      setIsLoading(false);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={{marginVertical: hp(1.5)}}>
        <MovieList
          isFavorite={false}
          onPress={() => goMovieDetail(item)}
          movieTitle={item.original_title}
          relaseDate={item.release_date}
          uri={`https://image.tmdb.org/t/p/w500${
            item.backdrop_path ? item.backdrop_path : item.poster_path
          }`}
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
      fetchTopRatedMovieData();
    }
  };

  return (
    <View style={style.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      {/* carousel */}

      <View style={{marginTop: StatusBar.currentHeight}}>
        <SlideImage
          carouselData={upComingMovieData?.results}
          onPress={goMovieDetail}
        />
      </View>

      <View></View>

      {/* categoryTitle */}
      <Text style={style.titleText}>Top Rated Movies</Text>

      {/* movieLists */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.flatList}
        data={topRatedMovieData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={renderFooter}
        ItemSeparatorComponent={ItemSeparatorComponent}
        onEndReached={loadMoreHandler}
      />

      {isLoading && <LoadingModalComponent />}
    </View>
  );
};

export default HomeScreen;

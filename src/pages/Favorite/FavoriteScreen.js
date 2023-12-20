import {View, Text, FlatList, StatusBar} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//style
import style from './style';

//context
import {AuthContext} from '../../context/Context';

//components
import NoDataFound from '../../components/NoDataFound';
import MovieList from '../../components/MovieRenderComponent';
import LoadingModalComponent from '../../components/LoadingModal';

//utils
import {NetErrorToast} from '../../utils/NetErrorToast';
import apiUrl from '../../utils/apiUrl';
import {fetchGetByToken} from '../../utils/fetchData';
import appStorage from '../../utils/appStorage';
import {useSelector} from 'react-redux';

const FavoriteScreen = ({navigation}) => {
  const {net} = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  // const favorite = useSelector(state => state.favorite.value);
  const [darkData, setDarkData] = useState([]);

  let controller = new AbortController();
  const signal = controller.signal;

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
    const ddd = appStorage.getItem('@favoriteData');
    if (ddd?.length > 0) {
      setDarkData(JSON.parse(ddd));
    }
  }, [net]);

  const goMovieDetail = item => {
    fetchMovieDetail(item.id);
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

  const renderItem = ({item}, index) => {
    return (
      <View style={{marginVertical: hp(1.5)}}>
        <MovieList
          isFavorite={true}
          onPress={() => goMovieDetail(item)}
          relaseDate={item.release_date}
          movieTitle={item.original_title}
          uri={`https://image.tmdb.org/t/p/w500${
            item.backdrop_path ? item.backdrop_path : item.poster_path
          }`}
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

      <View style={{marginTop: StatusBar.currentHeight}}>
        <Text style={style.titleText}>My Favorites</Text>
      </View>

      {/* movieList */}
      {darkData.length != 0 ? (
        <FlatList
          style={style.flatList}
          data={darkData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={ItemSeparatorComponent}
        />
      ) : (
        <NoDataFound text={'No Favorite Found'} />
      )}

      {isLoading && <LoadingModalComponent />}
    </View>
  );
};

export default FavoriteScreen;

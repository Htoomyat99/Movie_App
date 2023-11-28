import {View, Text, FlatList, StatusBar} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

//style
import style from './style';

//context
import {AuthContext} from '../../context/Context';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

//components
import NoDataFound from '../../components/NoDataFound';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieRenderComponent';

//utils
import {NetErrorToast} from '../../utils/NetErrorToast';

const FavoriteScreen = ({navigation}) => {
  const [data, setIsData] = useState(true);

  const {net} = useContext(AuthContext);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, [net]);

  const goMovieDetail = ({item}) => {
    navigation.navigate('HomeDetail', {data: item});
  };

  const renderItem = (item, index) => {
    const imageUrl =
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png';

    return (
      <View style={{marginTop: hp(3)}}>
        <MovieList
          isFavorite={true}
          onPress={() => goMovieDetail(item)}
          uri={imageUrl}
          movieTitle={'One Piece: The Flim Red'}
          relaseDate={2022}
          rating={7.02}
          popularity={140}
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
      {data ? (
        <FlatList
          style={style.flatList}
          data={carouselData}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <NoDataFound />
      )}
    </View>
  );
};

export default FavoriteScreen;

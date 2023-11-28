import {View, Text, FlatList, StatusBar} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';

//style
import style from './style';

//context
import {AuthContext} from '../../context/Context';

//components
import NoDataFound from '../../components/NoDataFound';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieRenderComponent';

//utils
import {NetErrorToast} from '../../utils/NetErrorToast';

const FavoriteScreen = ({navigation}) => {
  const [data, setIsData] = useState(false);

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
    return <MovieList isFavorite={true} onPress={() => goMovieDetail(item)} />;
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <Text style={style.titleText}>My Favorites</Text>

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

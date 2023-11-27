import {View, Text, FlatList, StatusBar} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//style
import style from './style';

//context
import {AuthContext} from '../../context/Context';

//components
import NoDataFound from '../../components/NoDataFound';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieList';

//utils
import {movieColor} from '../../utils/theme/color';
import {NetErrorToast} from '../../utils/NetErrorToast';

const FavoriteScreen = () => {
  const [data, setIsData] = useState(false);

  const {net} = useContext(AuthContext);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, [net]);

  const renderItem = (item, index) => {
    return <MovieList isFavorite={true} />;
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={movieColor.primary}
        barStyle={'dark-content'}
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

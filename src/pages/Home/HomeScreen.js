import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
import MovieList from '../../components/MovieList';

const HomeScreen = ({navigation}) => {
  const {net} = useContext(AuthContext);

  useEffect(() => {
    if (!net) {
      NetErrorToast();
    }
  }, [net]);

  const goMovieDetail = item => {
    navigation.navigate('HomeDetail', {data: item});
  };

  const renderItem = ({item}, index) => {
    return <MovieList isFavorite={false} onPress={() => goMovieDetail(item)} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: movieColor.white}}>
      <StatusBar
        backgroundColor={movieColor.primary}
        barStyle={'dark-content'}
      />

      <SlideImage />

      {/* categoryTitle */}
      <Text style={style.titleText}>Today Movie Lists</Text>

      {/* movieLists */}
      <FlatList
        style={style.flatList}
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

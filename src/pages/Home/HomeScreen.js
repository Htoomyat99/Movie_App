import {
  View,
  Text,
  Image,
  FlatList,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useEffect} from 'react';

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
        <SlideImage />
      </View>

      {/* categoryTitle */}
      <Text style={style.titleText}>Today Movie Lists</Text>

      {/* movieLists */}
      <FlatList
        showsVerticalScrollIndicator={false}
        style={style.flatList}
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default HomeScreen;

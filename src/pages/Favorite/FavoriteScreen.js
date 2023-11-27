import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import AnimatedLottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NoDataFound from '../../components/NoDataFound';
import style from './style';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieList';

const FavoriteScreen = () => {
  const [data, setIsData] = useState(true);

  const renderItem = (item, index) => {
    return <MovieList isFavorite={true} />;
  };

  return (
    <View style={{flex: 1}}>
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

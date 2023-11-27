import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {movieColor} from '../../utils/theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SlideImage from '../../components/SlideImage';
import style from './style';
import carouselData from '../../data/data';
import MovieList from '../../components/MovieList';

const HomeScreen = () => {
  // const renderItem = () => {
  //   return (
  //     <View style={style.mainContainer}>
  //       <View style={{borderWidth: 1}}>
  //         <Image
  //           style={style.movieImage}
  //           source={require('../../../assets/images/luffy.jpeg')}
  //           resizeMode="cover"
  //         />
  //       </View>
  //       <View style={style.textContainer}>
  //         <Text style={style.movieTitleText}>Movie Title</Text>
  //         <Text style={style.relaseText}>Movie Type</Text>
  //         <Text style={style.relaseText}>Release Date</Text>
  //         <Text style={style.relaseText}>Rating</Text>
  //       </View>
  //     </View>
  //   );
  // };

  const renderItem = (item, index) => {
    return <MovieList isFavorite={false} />;
  };

  return (
    <View style={{flex: 1, backgroundColor: movieColor.white}}>
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

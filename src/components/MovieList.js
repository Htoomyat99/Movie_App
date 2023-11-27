import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FavoriteFilled from '../../assets/icons/FavoriteFilled';

const MovieList = props => {
  return (
    <View style={style.mainContainer}>
      <View style={{borderWidth: 1}}>
        <Image
          style={style.movieImage}
          source={require('../../assets/images/luffy.jpeg')}
          resizeMode="cover"
        />
      </View>
      <View style={style.textContainer}>
        <Text style={style.movieTitleText}>Movie Title</Text>
        <Text style={style.relaseText}>Movie Type</Text>
        <Text style={style.relaseText}>Release Date</Text>
        <Text style={style.relaseText}>Rating</Text>
      </View>
      {props.isFavorite && (
        <TouchableOpacity style={style.favoriteContainer}>
          <FavoriteFilled />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default MovieList;

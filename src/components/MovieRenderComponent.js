import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

//style
import style from './style';

//icons
import FavoriteFilled from '../../assets/icons/FavoriteFilled';
import StarIcon from '../../assets/icons/StarIcon';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const MovieList = props => {
  return (
    <TouchableOpacity
      style={style.mainContainer}
      onPress={props.onPress}
      activeOpacity={0.7}>
      <View>
        <Image
          style={style.movieImage}
          source={{uri: props.uri}}
          resizeMode="cover"
        />
      </View>

      <View style={style.textContainer}>
        <Text style={style.movieTitleText}>{props.movieTitle}</Text>
        <Text style={style.relaseText}>
          {props.popularity > 100 ? 'Top Rated' : 'Normal Rated'}
        </Text>
        <Text style={style.relaseText}>{props.relaseDate}</Text>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Text style={style.relaseText}>{props.rating}</Text>
          <View style={{marginTop: hp(1.5), marginLeft: hp(1)}}>
            <StarIcon />
          </View>
        </View>
      </View>

      {props.isFavorite && (
        <View style={style.favoriteContainer}>
          <FavoriteFilled />
        </View>
      )}
    </TouchableOpacity>
  );
};

export default MovieList;

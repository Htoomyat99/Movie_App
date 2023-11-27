import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import style from './style';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//icons
import BackIcon from '../../../assets/icons/BackIcon';
import StarIcon from '../../../assets/icons/StarIcon';
import PlayIcon from '../../../assets/icons/PlayIcon';
import TrailerIcon from '../../../assets/icons/TrailerIcon';

const HeaderComponent = props => {
  return (
    <View>
      <Image
        source={require('../../../assets/images/luffy.jpeg')}
        style={{width: wp(100), height: hp(50)}}
        resizeMode="cover"
      />

      {/* backIcon */}
      <TouchableOpacity style={style.backIconContainer}>
        <BackIcon width={wp(5)} height={wp(5)} />
      </TouchableOpacity>

      {/* ratings */}
      <View style={style.ratingContainer}>
        <Text style={style.ratingText}>Rating</Text>
        <View style={style.iconContainer}>
          <StarIcon />
          <Text style={style.starText}>7.6</Text>
        </View>
      </View>

      {/* releaseDate */}
      <View style={style.releaseDateContainer}>
        <Text style={style.ratingText}>Release Date - 2023</Text>
      </View>

      {/* Button */}
      <View style={style.buttonContainer}>
        <TouchableOpacity
          onPress={props.playMovieAction}
          style={style.playButtonContainer}
          activeOpacity={0.8}>
          <PlayIcon />
          <Text style={style.playText}>Play</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={props.playTrailerAction}
          style={style.watchTrailerContainer}
          activeOpacity={0.8}>
          <TrailerIcon />
          <Text style={style.watchTrailerText}>Watch Trailer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HeaderComponent;

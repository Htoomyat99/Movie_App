import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React, {useContext} from 'react';
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
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';
import FavoriteFilled from '../../../assets/icons/FavoriteFilled';
import {movieColor} from '../../utils/theme/color';
import {AuthContext} from '../../context/Context';
import VideoPlayer from 'react-native-video-player';

const HeaderComponent = props => {
  const {favoriteList} = useContext(AuthContext);

  const foundMovie =
    favoriteList.length > 0 &&
    favoriteList.find(item => item.id === props.data.id);

  // console.log('foundMovie >>>', props.isFavorite, foundMovie);

  return (
    <View style={{zIndex: 1}}>
      <View style={{height: hp(55)}}>
        <VideoPlayer
          video={require('../../../assets/video/myMoive.mp4')}
          // video={{
          //   uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
          // }}
          // video={{
          //   uri: 'https://www.themoviedb.org/movie/238-the-godfather/watch?locale=AO.mp4',
          // }}
          videoWidth={1600}
          videoHeight={hp(225)}
          endThumbnail={{uri: props.uri}}
          thumbnail={{
            uri: props.uri,
          }}
          showDuration={true}
        />
      </View>

      {/* backIcon */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          style.backIconContainer,
          {left: wp(6), backgroundColor: 'rgba(52, 52, 52, 0.70)'},
        ]}
        onPress={props.backAction}>
        <BackIcon width={wp(4.5)} height={wp(4.5)} />
      </TouchableOpacity>

      {/* favoriteIcon */}
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          style.backIconContainer,
          {right: wp(6), backgroundColor: '#eee'},
        ]}
        onPress={props.favoriteAction}>
        {props.isFavorite && foundMovie ? (
          <FavoriteFilled />
        ) : (
          <FavoriteIcon color={movieColor.black} />
        )}
      </TouchableOpacity>

      {/* ratings */}
      <View style={style.ratingContainer}>
        <View style={style.iconContainer}>
          <StarIcon />
          <Text style={style.starText}>{props.rating}</Text>
        </View>

        <View style={style.divider}></View>

        <Text style={style.ratingText}>{props.releaseDate}</Text>
      </View>

      {/* Button */}
      {/* <View style={style.buttonContainer}>
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
      </View> */}
    </View>
  );
};

export default HeaderComponent;

import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//data
import carouselData from '../../data/data';

//style
import style from './style';
import {movieColor} from '../../utils/theme/color';
import TruncatedText from '../TruncatedText';

const BodyComponent = props => {
  const renderMovieType = ({index, item}) => {
    return (
      <View style={style.movieTypeContainer}>
        <Text style={style.movieTypeText}>{item.name}</Text>

        {index != props.genresData.length - 1 && (
          <View style={style.dotContainer}></View>
        )}
      </View>
    );
  };

  const renderCastItem = ({item}) => {
    return (
      <View style={style.castContainer}>
        <Image
          style={{width: wp(15), height: wp(15), borderRadius: wp(10)}}
          source={require('../../../assets/images/luffy.jpeg')}
          resizeMode="contain"
        />

        <Text style={style.realNameText}>Luffy</Text>
        <Text style={style.movieStarNameText}>Luffy Voice</Text>
      </View>
    );
  };

  return (
    <View style={style.bodyMainContainer}>
      <View style={style.bodyContainer}>
        <View style={{width: wp(70)}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={props.genresData}
            renderItem={renderMovieType}
            keyExtractor={item => item.id}
          />
        </View>

        <Text style={style.durationText}>{props.runtime} min</Text>
      </View>

      <Text style={style.movieNameText}>{props.movieTitle}</Text>

      <TruncatedText text={props.overView} maxWords={25} />

      {/* <Text style={style.castHeaderText}>Cast & Crew</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={carouselData}
        renderItem={renderCastItem}
        keyExtractor={item => item.id}
      /> */}
    </View>
  );
};

export default BodyComponent;

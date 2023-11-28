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

const BodyComponent = () => {
  const longText = `Uta is a beloved singer, renowned for concealing her own identity when performing. Her voice is described as "otherworldly." Now, for the firsttime ever, Uta will reveal herself to the world at a live concert.`;
  const renderMovieType = ({index, item}) => {
    return (
      <View style={style.movieTypeContainer}>
        <Text style={style.movieTypeText}>Actions</Text>

        {index != carouselData.slice(0, 3).length - 1 && (
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
            data={carouselData.slice(0, 3)}
            renderItem={renderMovieType}
            keyExtractor={item => item.id}
          />
        </View>

        <Text style={style.durationText}>3h 12m</Text>
      </View>

      <Text style={style.movieNameText}>One Piece: The Flim Red</Text>

      <TruncatedText text={longText} maxWords={20} />

      <Text style={style.castHeaderText}>Cast & Crew</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={carouselData}
        renderItem={renderCastItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BodyComponent;

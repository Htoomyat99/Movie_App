import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//utils
import {movieColor} from '../../utils/theme/color';

//data
import carouselData from '../../data/data';

const BodyComponent = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          marginHorizontal: wp(3),
          paddingHorizontal: wp(1),
          paddingVertical: hp(1),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: wp(15), height: wp(15), borderRadius: wp(10)}}
          source={require('../../../assets/images/luffy.jpeg')}
          resizeMode="contain"
        />
        <Text style={{color: movieColor.primary, marginTop: hp(1)}}>Luffy</Text>
        <Text style={{color: movieColor.primary, marginTop: hp(0.5)}}>
          Luffy Voice
        </Text>
      </View>
    );
  };
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: wp(90),
          backgroundColor: 'red',
          marginTop: hp(2),
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text>Action</Text>
          <Text>Adventure</Text>
          <Text>Fantasy</Text>
        </View>
        <Text>3h 12m</Text>
      </View>

      <Text style={{color: movieColor.primary, width: wp(90)}}>
        One Piece: The Flim Red
      </Text>

      <Text style={{color: movieColor.primary, width: wp(90)}}>
        Uta is a beloved singer, renowned for concealing her own identity when
        performing. Her voice is described as "otherworldly." Now, for the first
        time ever, Uta will reveal herself to the world at a live concert.
      </Text>

      <Text style={{color: movieColor.primary, width: wp(90)}}>Top Cast</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={carouselData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default BodyComponent;

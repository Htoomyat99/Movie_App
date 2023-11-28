import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//style
import style from './style';

//data
import carouselData from '../data/data';

const SlideImage = props => {
  const [active, setActive] = useState(0);

  // console.log('caursoelData >>>', props.carouselData ? props.carouselData : []);

  return (
    <View>
      <Carousel
        loop
        width={wp(100)}
        height={hp(25)}
        autoPlay={true}
        data={props.carouselData}
        scrollAnimationDuration={2000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onSnapToItem={index => setActive(index)}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => props.onPress(item)}
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <View style={style.comingSoonContainer}>
              <Text style={style.comingSoonText}>Trending</Text>
            </View>

            <Image
              style={{
                width: wp(100),
                height: hp(25),
                borderRadius: wp(2),
              }}
              resizeMode="cover"
              source={{
                uri: `https://image.tmdb.org/t/p/w500${item.backdrop_path}`,
              }}
            />
            <View
              style={{
                marginTop: -hp(10),
                marginLeft: wp(7),
              }}>
              <Text style={style.titleText}>{item.original_title}</Text>
              <Text style={style.nameText}>{item.release_date}</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* dotIndicatior */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: hp(1.2),
        }}>
        <View style={style.dotContainer}>
          {carouselData.map((item, index) => (
            <Text
              key={index}
              style={
                index === active % carouselData.length
                  ? style.dotActive
                  : style.dot
              }></Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SlideImage;

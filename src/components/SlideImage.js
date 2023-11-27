import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import carouselData from '../data/data';
import style from './style';

const SlideImage = () => {
  const [active, setActive] = useState(0);

  //   useEffect(() => {
  //     console.log('active >>', active);
  //   }, [active]);

  return (
    <View>
      <Carousel
        loop
        width={wp(100)}
        height={hp(25)}
        autoPlay={true}
        data={carouselData}
        scrollAnimationDuration={2000}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        onSnapToItem={index => setActive(index)}
        renderItem={({item, index}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assets/images/onepiece.jpeg')}
              style={{
                width: wp(100),
                height: hp(25),
                borderRadius: wp(2),
              }}
              resizeMode="cover"
            />
            <View style={{marginTop: -hp(8), marginLeft: wp(7)}}>
              <Text style={style.titleText}>Spider Man: No Way Home</Text>
              <Text style={style.nameText}>Kein Fegie Army Pascal</Text>
            </View>
            <View style={style.comingSoonContainer}>
              <Text style={style.comingSoonText}>Premium</Text>
            </View>
          </View>
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
              style={index == active ? style.dotActive : style.dot}></Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default SlideImage;

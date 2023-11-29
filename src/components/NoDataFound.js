import {View, Text} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AnimatedLottieView from 'lottie-react-native';

//style
import style from './style';

const NoDataFound = props => {
  return (
    <View
      style={{
        marginTop: hp(20),
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <AnimatedLottieView
        source={require('../../assets/icons/animated/noDataFound.json')}
        style={{width: hp(30), height: hp(30)}}
        autoPlay
        loop={true}
      />
      <Text style={style.noDataText}>{props.text}</Text>
    </View>
  );
};

export default NoDataFound;

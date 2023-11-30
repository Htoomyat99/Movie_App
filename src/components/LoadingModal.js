import React from 'react';
import {View, Text, Modal, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AnimatedLottieView from 'lottie-react-native';
import style from './style';
import {movieColor} from '../utils/theme/color';

const LoadingModalComponent = () => {
  return (
    <Modal
      style={style.loadingView}
      transparent={true}
      visible={true}
      onRequestClose={() => {}}
      animationType="fade">
      <StatusBar backgroundColor="#eee" barStyle={'dark-content'} />
      <View style={style.indicatorContainer}>
        <View style={style.content}>
          <AnimatedLottieView
            style={style.otpLottie}
            source={require('../../assets/icons/animated/Loading.json')}
            autoPlay
            loop={true}
          />

          <Text style={style.indicatorText}>Loading ...</Text>
        </View>
      </View>
    </Modal>
  );
};

export default LoadingModalComponent;

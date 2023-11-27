import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//components
import HeaderComponent from '../../components/MovieDetail/HeaderComponent';
import BodyComponent from '../../components/MovieDetail/BodyComponent';

const HomeDetailScreen = ({route, navigation}) => {
  const {data} = route.params;

  const playMovieAction = () => {
    console.log('movie play');
  };

  const playTrailerAction = () => {
    console.log('trailer play');
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />

      <HeaderComponent
        playMovieAction={playMovieAction}
        playTrailerAction={playTrailerAction}
      />

      <BodyComponent />
    </View>
  );
};

export default HomeDetailScreen;

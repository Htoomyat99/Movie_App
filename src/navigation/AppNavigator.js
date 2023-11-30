import {View, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './tab/HomeTabNavigator';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';

//context
import {AuthContext} from '../context/Context';

//utils

const AppNavigator = () => {
  const [isTemporary, setIsTemporary] = useState(true);
  const [net, setNet] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteList, setFavoriteList] = useState([]);

  const context = {
    net,
    isFavorite,
    favoriteList,

    changeIsFavorite: val => {
      setIsFavorite(val);
    },
    changeFavoriteList: val => {
      setFavoriteList(prev => [...prev, val]);
    },
    changeUpdateList: val => {
      setFavoriteList(val);
    },
  };

  useEffect(() => {
    const netListener = NetInfo.addEventListener(state => {
      setNet(state.isInternetReachable);
    });

    setTimeout(() => {
      setIsTemporary(false);
    }, 1500);

    SplashScreen.hide();

    return () => {
      netListener();
    };
  }, []);

  useEffect(() => {
    // const movieData = appStorage.getItem('@movie_data');
    // const is_favorite = appStorage.getItem('@is_favorite');
    // setFavoriteList(JSON.parse(movieData));
    // setIsFavorite(is_favorite);
    // console.log(isFavorite, movieData);
  }, []);

  if (isTemporary) {
    return (
      <>
        <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
          }}>
          <Image
            style={{resizeMode: 'contain', flex: 1}}
            source={require('../../assets/images/splashScreen.png')}
          />
        </View>
      </>
    );
  }

  return (
    <AuthContext.Provider value={context}>
      <NavigationContainer>
        <HomeTabNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigator;

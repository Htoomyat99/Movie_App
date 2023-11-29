import {View, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './tab/HomeTabNavigator';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import NetInfo from '@react-native-community/netinfo';
import {onlineManager} from 'react-query';
import SplashScreen from 'react-native-splash-screen';

//context
import {AuthContext} from '../context/Context';

//utils
import {NetErrorToast} from '../utils/NetErrorToast';

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
  };

  useEffect(() => {
    onlineManager.setEventListener(setOnline => {
      return NetInfo.addEventListener(state => {
        setOnline(state.isConnected);
      });
    });

    // NetInfo.configure({
    //   reachabilityUrl: 'https://apps.apple.com',
    //   reachabilityTest: async response => response.status == 200,
    // });

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
        {/* <LoadingModal /> */}
        <HomeTabNavigator />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default AppNavigator;

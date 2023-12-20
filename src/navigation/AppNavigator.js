import {View, StatusBar, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeTabNavigator from './tab/HomeTabNavigator';
import NetInfo from '@react-native-community/netinfo';
import SplashScreen from 'react-native-splash-screen';

//context
import {AuthContext} from '../context/Context';
import appStorage from '../utils/appStorage';

//utils

const AppNavigator = () => {
  const [isTemporary, setIsTemporary] = useState(true);
  const [net, setNet] = useState(true);

  const context = {
    net,
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

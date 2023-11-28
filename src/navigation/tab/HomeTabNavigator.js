import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import AnimatedLottieView from 'lottie-react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

//StackNavigator
import HomeStackNavigator from '../stack/HomeStackNavigator';
import SearchStackNavigator from '../stack/SearchStackNavigator';
import FavoriteStackNavigator from '../stack/FavoriteStackNavigator';

//icons
import HomeIcon from '../../../assets/icons/HomeIcon';
import SearchIcon from '../../../assets/icons/SearchIcon';
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';

//utils
import {movieColor} from '../../utils/theme/color';

const Tab = createBottomTabNavigator();

const stack = ['HomeDetail', 'SearchDetail', 'FavoriteDetail'];

const HomeTabNavigator = () => {
  let title = 'HomeStack';
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: movieColor.primary,
        tabBarInactiveBackgroundColor: movieColor.grey,
        tabBarHideOnKeyboard: true,
        unmountOnBlur: true,
        tabBarLabelStyle: {
          fontSize: hp(1.7),
          paddingBottom: hp(1),
          fontFamily: 'PTSans-Bold',
        },

        tabBarIcon: ({focused}) => {
          let iconName;
          switch (route.name) {
            case 'HomeStack':
              if (focused)
                iconName = (
                  <AnimatedLottieView
                    source={require('../../../assets/icons/animated/homeFocus.json')}
                    style={{width: hp(16), height: hp(10)}}
                    autoPlay
                    loop={true}
                  />
                );
              else iconName = <HomeIcon />;
              break;

            case 'SearchStack':
              if (focused)
                iconName = (
                  <AnimatedLottieView
                    source={require('../../../assets/icons/animated/SearchFocus.json')}
                    style={{width: hp(10), height: hp(6)}}
                    autoPlay
                    loop={true}
                  />
                );
              else
                iconName = (
                  <SearchIcon
                    width={wp(6)}
                    height={wp(6)}
                    fill={movieColor.grey_shade200}
                  />
                );
              break;

            case 'FavoriteStack':
              if (focused)
                iconName = (
                  <AnimatedLottieView
                    source={require('../../../assets/icons/animated/favorite.json')}
                    style={{width: hp(10), height: hp(8)}}
                    autoPlay
                    loop={true}
                  />
                );
              else iconName = <FavoriteIcon color="#D8D8D8" />;
              break;

            default:
              break;
          }
          return iconName;
        },
        tabBarStyle: (route => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? '';
          if (stack.includes(routeName)) {
            return {display: 'none'};
          }
          return {
            backgroundColor: '#F5F5F5',
            position: 'absolute',
            elevation: 0.7,
            height: hp(10),
            paddingTop: hp(1.3),
            paddingHorizontal: hp(1.3),
          };
        })(route),
      })}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStackNavigator}
        options={{title: 'Home'}}
      />
      <Tab.Screen
        name="SearchStack"
        component={SearchStackNavigator}
        options={{title: 'Search'}}
      />
      <Tab.Screen
        name="FavoriteStack"
        component={FavoriteStackNavigator}
        options={{title: 'Favorite'}}
      />
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;

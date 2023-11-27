import Toast from 'react-native-toast-message';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const NetErrorToast = () => {
  Toast.show({
    type: 'error',
    text1: 'No Internet Connection 😔',
    text2: 'Please check your connection and try again.',
    position: 'top',
    visibilityTime: 3000,
    autoHide: true,
    topOffset: hp(1),
  });
};

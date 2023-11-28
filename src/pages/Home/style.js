import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {movieColor} from '../../utils/theme/color';

const style = StyleSheet.create({
  //homeScreen
  titleText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: movieColor.primary,
    marginLeft: wp(5),
    marginVertical: hp(3),
  },
  flatList: {
    flex: 1,
    marginBottom: hp(10),
  },
});

export default style;

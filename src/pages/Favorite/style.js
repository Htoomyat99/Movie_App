import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {movieColor} from '../../utils/theme/color';

const style = StyleSheet.create({
  titleText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.5),
    color: movieColor.primary,
    marginTop: hp(3),
    marginLeft: wp(5),
    marginBottom: hp(1),
  },
  flatList: {
    flex: 1,
    marginBottom: hp(10),
    paddingBottom: hp(5),
  },
});

export default style;

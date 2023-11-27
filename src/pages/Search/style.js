import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {movieColor} from '../../utils/theme/color';

const style = StyleSheet.create({
  headerText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: movieColor.primary,
    marginLeft: wp(5),
    marginTop: hp(3),
  },
  flatList: {
    flex: 1,
    marginBottom: hp(10),
    paddingBottom: hp(5),
  },
});

export default style;

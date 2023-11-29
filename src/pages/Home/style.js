import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {movieColor} from '../../utils/theme/color';

const style = StyleSheet.create({
  //homeScreen
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: movieColor.white,
  },
  titleText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: movieColor.primary,
    marginLeft: wp(5),
    marginTop: hp(3),
    marginBottom: hp(1),
  },
  flatList: {
    flex: 1,
    marginBottom: hp(10),
  },
});

export default style;

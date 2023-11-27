import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {movieColor} from '../../utils/theme/color';

const style = StyleSheet.create({
  titleText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: movieColor.black,
    marginLeft: wp(5),
    marginTop: hp(3),
  },

  //flatList
  flatList: {
    flex: 1,
    marginBottom: hp(10),
    paddingBottom: hp(5),
  },
  footerLine: {
    width: wp(100),
    height: wp(0.1),
    backgroundColor: movieColor.black,
  },

  //renderItem
  mainContainer: {
    marginTop: hp(3),
    marginLeft: wp(5),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  movieImage: {
    width: wp(25),
    height: hp(18),
    borderRadius: wp(3),
  },
  textContainer: {
    marginLeft: wp(8),
  },
  movieTitleText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: movieColor.black,
    marginTop: hp(1.8),
  },
  relaseText: {
    fontFamily: 'PTSans-Regular',
    fontSize: hp(2),
    color: movieColor.black,
    marginTop: hp(1.2),
  },
});

export default style;

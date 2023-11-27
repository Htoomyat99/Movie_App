import {StyleSheet} from 'react-native';
import {movieColor} from '../utils/theme/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const style = StyleSheet.create({
  //slideImage
  titleText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: movieColor.primary,
  },
  nameText: {
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.8),
    color: movieColor.primary,
    marginTop: hp(1),
  },
  comingSoonContainer: {
    backgroundColor: movieColor.primary,
    width: wp(25),
    height: wp(9.5),
    borderTopLeftRadius: wp(5),
    borderBottomLeftRadius: wp(5),
    borderTopRightRadius: wp(1),
    borderBottomRightRadius: wp(1),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: hp(2.5),
    right: hp(1),
  },
  comingSoonText: {
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.9),
    color: movieColor.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  dotActive: {
    width: wp(5),
    height: wp(2),
    borderRadius: wp(1),
    backgroundColor: movieColor.primary,
    marginHorizontal: wp(1),
  },
  dot: {
    width: wp(2),
    height: wp(2),
    borderRadius: wp(1),
    backgroundColor: movieColor.primaryContent,
    marginHorizontal: wp(1),
  },

  //MovieList
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
  favoriteContainer: {
    marginTop: hp(2),
    marginLeft: wp(20),
  },

  //TextInput
  inputContainer: {
    width: wp(90),
    alignSelf: 'center',
    marginTop: hp(3),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: wp(0.1),
    borderColor: '#bbb',
    borderRadius: wp(2),
  },
  textInput: {
    width: wp(78),
    height: hp(5),
    paddingHorizontal: wp(3),
    fontFamily: 'PTSans-Regular',
    fontSize: hp(2),
    color: movieColor.black,
  },

  //NoDataFound
  noDataText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: '#bbb',
  },
});

export default style;

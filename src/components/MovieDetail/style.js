import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {movieColor} from '../../utils/theme/color';

const style = StyleSheet.create({
  //headerComponents
  backIconContainer: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(2),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp(6),
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0.90)',
    padding: wp(1.3),
    width: wp(35),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: wp(1.3),
    position: 'absolute',
    top: hp(45.5),
    left: wp(6),
  },
  ratingText: {
    color: 'white',
    fontFamily: 'PTSans-Bold',
    fontSize: hp(1.7),
  },
  divider: {
    width: wp(0.2),
    height: hp(1.8),
    backgroundColor: movieColor.white,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starText: {
    color: 'white',
    marginLeft: wp(1),
    fontFamily: 'PTSans-Bold',
    fontSize: hp(1.7),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: movieColor.primary,
    paddingVertical: wp(2.5),
    borderBottomLeftRadius: wp(6),
    width: wp(50),
  },
  playText: {
    color: movieColor.white,
    paddingLeft: wp(3),
    fontFamily: 'PTSans-Regular',
    fontSize: hp(2.2),
  },
  watchTrailerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: wp(2.5),
    backgroundColor: movieColor.white,
    width: wp(50),
    borderBottomRightRadius: wp(6),
  },
  watchTrailerText: {
    color: movieColor.primary,
    paddingHorizontal: wp(2),
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2),
  },

  //bodyComponent
  bodyMainContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: movieColor.light_beige,
  },
  bodyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginTop: hp(1.8),
    paddingVertical: wp(1),
  },
  movieTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: wp(1.5),
    marginRight: wp(0.3),
  },
  movieTypeText: {
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.7),
    color: 'black',
  },
  dotContainer: {
    width: wp(1.2),
    height: wp(1.2),
    borderRadius: wp(1),
    backgroundColor: movieColor.primary,
    marginLeft: wp(1.5),
    marginTop: wp(0.5),
  },
  durationText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(1.7),
    color: 'black',
  },
  movieNameText: {
    color: movieColor.primary,
    width: wp(90),
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    marginTop: hp(1.5),
  },
  descriptionText: {
    color: movieColor.black,
    width: wp(90),
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.9),
    textAlign: 'justify',
    marginTop: hp(1),
  },
  castHeaderText: {
    color: movieColor.primary,
    width: wp(90),
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    marginTop: hp(2.5),
  },
  castContainer: {
    marginHorizontal: wp(0.5),
    paddingVertical: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: hp(1.5),
    width: wp(23),
  },
  realNameText: {
    color: movieColor.black,
    marginTop: hp(1),
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.7),
  },
  movieStarNameText: {
    color: movieColor.black,
    marginTop: hp(0.5),
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.7),
  },
});

export default style;

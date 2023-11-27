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
    borderRadius: wp(5),
    backgroundColor: 'rgba(52, 52, 52, 0.80)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: hp(6),
    left: wp(6),
  },
  ratingContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0.80)',
    padding: wp(1),
    width: wp(32),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp(1.2),
    position: 'absolute',
    top: hp(40),
    left: wp(6),
  },
  ratingText: {
    color: 'white',
    fontFamily: 'PTSans-Bold',
    fontSize: hp(1.9),
  },
  releaseDateContainer: {
    backgroundColor: 'rgba(52, 52, 52, 0.80)',
    width: wp(40),
    padding: wp(1.2),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: wp(1.2),
    position: 'absolute',
    top: hp(44.5),
    left: wp(6),
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(5),
  },
  starText: {
    color: 'white',
    marginLeft: wp(1),
    fontFamily: 'PTSans-Bold',
    fontSize: hp(1.9),
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
    backgroundColor: movieColor.grey_shade200,
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
});

export default style;

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
    color: movieColor.white,
    width: wp(80),
  },

  nameText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(1.8),
    color: movieColor.white,
    marginTop: hp(1),
  },
  comingSoonContainer: {
    zIndex: 1,
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
    top: hp(3),
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
    marginLeft: wp(5),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  movieImage: {
    width: wp(25),
    height: hp(16),
    borderRadius: wp(1.2),
  },
  textContainer: {
    marginLeft: wp(8),
    justifyContent: 'center',
  },
  movieTitleText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2),
    color: movieColor.black,
    width: wp(55),
  },
  relaseText: {
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.8),
    color: movieColor.black,
    marginTop: hp(1.2),
  },
  favoriteContainer: {
    position: 'absolute',
    top: hp(1),
    left: wp(2),
    backgroundColor: '#ddd',
    padding: wp(1.5),
    borderRadius: wp(1),
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
    borderColor: '#000',
    borderRadius: wp(2),
  },
  textInput: {
    width: wp(78),
    height: hp(5),
    paddingHorizontal: wp(3),
    fontFamily: 'PTSans-Regular',
    fontSize: hp(2),
    color: movieColor.primary,
  },

  //NoDataFound
  noDataText: {
    fontFamily: 'PTSans-Bold',
    fontSize: hp(2.2),
    color: '#bbb',
  },

  //ToastMessage
  toastContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    padding: 16,
    borderRadius: 8,
    marginHorizontal: 50,
    marginBottom: 50,
    alignItems: 'center',
  },

  //truncatedText
  descriptionText: {
    color: movieColor.black,
    width: wp(90),
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.9),
    textAlign: 'justify',
    marginTop: hp(1),
  },
  truncatedText: {
    color: 'blue',
    fontFamily: 'PTSans-Regular',
    fontSize: hp(1.9),
  },

  //loadingModal
  loadingView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(52, 52, 52, 0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorContainer: {
    flex: 1,
    width: wp(100),
    height: hp(100),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  content: {
    backgroundColor: 'rgba(52, 52, 52, 0.40)',
    borderRadius: hp(0.8),
    paddingVertical: hp(1.8),
    paddingHorizontal: wp(3.5),
    marginBottom: hp(15),
  },
  otpLottie: {
    width: hp(4.5),
    height: hp(4.5),
    alignSelf: 'center',
  },
  indicatorText: {
    fontFamily: 'PTSans-Regular',
    color: '#FFF',
    fontSize: hp(1.8),
    textAlign: 'center',
    paddingHorizontal: wp(2),
  },
});

export default style;

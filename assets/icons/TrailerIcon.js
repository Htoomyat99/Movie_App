import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {movieColor} from '../../src/utils/theme/color';
const TrailerIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 93.7 108.3"
    width={wp(6)}
    height={wp(6)}
    {...props}>
    <Path
      fill={movieColor.primary}
      fillRule="evenodd"
      d="m82.5 3.4 1.2-.3L87 17.2l-.7 1.1-14.5 3.4L82.5 3.4zM48.9 66.9c6.1 0 11 4.9 11 11s-4.9 11-11 11-11-4.9-11-11 4.9-11 11-11zm-3.4 5.2 9.2 5.8-9.2 5.8V72.1zM8.4 52.2v-5l6-10.2H27l-8.9 15.2h10.6L37.6 37h12.6l-8.9 15.2h12.1L62.3 37h12.6L66 52.2h11.5L86.4 37h3v66.5h-81V52.2zm11.9 7.6h57.1V96H20.3V59.8zM8.4 32.2c2.4 0 4.4 2 4.4 4.4 0 2.4-2 4.4-4.4 4.4C6 41 4 39.1 4 36.6c0-2.4 2-4.4 4.4-4.4zM4.9 21.6l9.8-2.3L7.4 32 4.9 21.6zm22-5.2L41.5 13 30.8 31.4l-14.5 3.4 10.6-18.4zm27-6.3 14.6-3.4-10.7 18.4-14.6 3.4 10.7-18.4z"
      clipRule="evenodd"
    />
  </Svg>
);
export default TrailerIcon;

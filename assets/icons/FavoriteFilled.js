import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {movieColor} from '../../src/utils/theme/color';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const FavoriteFilled = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={20} height={18} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-2-3h24v24H-2z" />
      <Path
        fill={movieColor.primary}
        d="M11.35 17.13c-.76.69-1.93.69-2.69-.01l-.11-.1C3.3 12.27-.13 9.16 0 5.28.06 3.58.93 1.95 2.34.99 4.98-.81 8.24.03 10 2.09 11.76.03 15.02-.82 17.66.99c1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09Z"
      />
    </G>
  </Svg>
);
export default FavoriteFilled;

import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const PlayIcon = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" width={11} height={14} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path d="M-7-5h24v24H-7z" />
      <Path
        fill="#FFFFFF"
        d="M0 1.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L1.54.98A.998.998 0 0 0 0 1.82Z"
      />
    </G>
  </Svg>
);
export default PlayIcon;

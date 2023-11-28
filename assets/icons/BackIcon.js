import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */
const BackIcon = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={11}
    height={20}
    {...props}
    viewBox="0 0 20 20">
    <G fill="none" fillRule="evenodd">
      <Path d="M-6-2h24v24H-6z" opacity={0.87} />
      <Path
        fill="#FFFFFF"
        d="M10.62.99a1.25 1.25 0 0 0-1.77 0L.54 9.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L3.38 10l7.25-7.25c.48-.48.48-1.28-.01-1.76Z"
      />
    </G>
  </Svg>
);
export default BackIcon;

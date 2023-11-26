import * as React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Svg, {G, Polygon, Polyline, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const HomeIcon = props => (
  <Svg
    width={wp(7)}
    height={wp(7)}
    viewBox="0 0 90 90"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <G
      id="UI-English"
      stroke="none"
      strokeWidth={1}
      fill="none"
      fillRule="evenodd">
      <G id="Home" transform="translate(-126.000000, -2231.000000)">
        <G id="home" transform="translate(126.000000, 2231.000000)">
          <G
            id="\u7F16\u7EC4-10"
            transform="translate(14.400000, 11.700000)"
            stroke="#D8D8D8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={6}>
            <Polygon
              id="\u77E9\u5F62"
              points="30.6728427 0 60.3 21.4829457 60.3 60.3 0 60.3 0 22.200293"
            />
            <Polyline
              id="\u8DEF\u5F84"
              points="17.688 24.12 30.9827525 14.472 44.22 24.0959619"
            />
          </G>
          <Rect id="\u77E9\u5F62" x={0} y={0} width={90} height={90} />
        </G>
      </G>
    </G>
  </Svg>
);

export default HomeIcon;

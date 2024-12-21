import React from 'react';
import Svg, {
  Circle,
  G,
  Line,
  Path,
  Text,
  TSpan,
  Defs,
  Stop,
  LinearGradient,
  Rect,
  Image,
  Use,
  Pattern,
  Ellipse,
  ClipPath,
} from 'react-native-svg';

export const IconLeftArrow = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m15 5-7 7 7 7"
      stroke={props.stroke ? props.stroke : '#282828'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconRightArrow = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m9 5 7 7-7 7"
      stroke={props.stroke ? props.stroke : '#282828'}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export const IconClose = (props: any) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M18.364 5.636 12 12m-6.364 6.364L12 12m0 0L5.636 5.636M12 12l6.364 6.364"
      stroke="#282828"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

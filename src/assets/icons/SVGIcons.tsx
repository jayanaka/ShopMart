import React from 'react';
import Svg, {Path} from 'react-native-svg';

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

export const IconCart = (props: any) => (
  <Svg
    width={100}
    height={100}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.513 6H7.487A2.5 2.5 0 0 0 5.05 9.057l.913 4A2.5 2.5 0 0 0 8.401 15H15.6a2.5 2.5 0 0 0 2.437-1.943l.913-4A2.5 2.5 0 0 0 16.513 6M7.376 8.013A.5.5 0 0 1 7.487 8h9.026a.5.5 0 0 1 .487.611l-.913 4A.5.5 0 0 1 15.6 13H8.4a.5.5 0 0 1-.487-.389l-.913-4a.5.5 0 0 1 .376-.598"
      fill={props.fill ? props.fill : '#FFFFFF'}
    />
    <Path
      d="M3.49 2H2a1 1 0 0 1 0-2h2.29a1 1 0 0 1 .975.78l2.71 12a1 1 0 1 1-1.95.44zM10 17.25a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0m7 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0"
      fill={props.fill ? props.fill : '#FFFFFF'}
    />
  </Svg>
);

export const IconDelete = (props: any) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M3 6h18M9 6v12M15 6v12M4 6l1.528 14.24c.096.89.84 1.56 1.736 1.56h9.472c.896 0 1.64-.67 1.736-1.56L20 6M10 6V4c0-.552.448-1 1-1h2c.552 0 1 .448 1 1v2"
      stroke="#FF0000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

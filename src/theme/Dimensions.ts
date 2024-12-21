import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export default {
  WIDTH: width,
  HEIGHT: height,
  RESPONSIVE_HEIGHT: height / 926,
  RESPONSIVE_WIDTH: width / 428,
  RESPONSIVE_SIZE: (height / width) * (375 / 812),
};

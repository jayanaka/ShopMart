import {StyleSheet, Platform, PixelRatio} from 'react-native';
import Colors from './Colors';
import Fonts from './Fonts';
import Dimensions from './Dimensions';

type TypographyStyle = {
  LABEL: any;
  BUTTON: any;
  TOAST: any;
};

export const Typography = StyleSheet.create<TypographyStyle>({
  LABEL: {
    l1: {
      fontFamily: Fonts.MEDIUM,
      fontSize: 22 * Dimensions.RESPONSIVE_WIDTH,
      color: Colors.PRIMARY_COLOR,
    },
  },

  BUTTON: {
    b1: {
      fontFamily: Fonts.SEMI_BOLD,
      fontSize: 17 * Dimensions.RESPONSIVE_WIDTH,
      color: Colors.PRIMARY_COLOR,
    },
  },

  TOAST: {
    l1: {
      fontFamily: Fonts.REGULAR,
      fontSize: 17 * Dimensions.RESPONSIVE_WIDTH,
      color: Colors.PRIMARY_COLOR,
    },
    l2: {
      fontFamily: Fonts.REGULAR,
      fontSize: 14 * Dimensions.RESPONSIVE_WIDTH,
      color: Colors.PRIMARY_COLOR,
    },
  },
});


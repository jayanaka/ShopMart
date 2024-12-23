import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {SkypeIndicator} from 'react-native-indicators';

import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';

const SpinnerOverlay = ({visible}: any) => {
  return (
    <View key={'sp'} style={styles.container}>
      <SkypeIndicator color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.WIDTH,
    height: Dimensions.HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK_OPACITY_40,
  },
});

export default SpinnerOverlay;

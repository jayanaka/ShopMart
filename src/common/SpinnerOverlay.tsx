import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from '../theme/Colors';

const SpinnerOverlay = ({visible}: any) => {
  return (
    <View>
      <Spinner visible={visible} size="large" color={Colors.SPINNER_COLOR}  />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    width: 50,
    height: 50,
  },
});

export default SpinnerOverlay;

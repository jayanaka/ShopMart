/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Colors from '../theme/Colors';
import Dimensions from '../theme/Dimensions';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Products');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo/logo.png')}
        style={styles.logo}
        resizeMode={'contain'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PRIMARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: Dimensions.WIDTH * 0.6,
    height: Dimensions.WIDTH * 0.6,
  },
});

export default Splash;

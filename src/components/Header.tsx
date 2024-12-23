import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Dimensions from '../theme/Dimensions';
import Colors from '../theme/Colors';
import {Typography} from '../theme/Typography';
import { IconCart, IconLeftArrow } from '../assets/icons/SVGIcons';

export const Header = ({
  title = '',
  containerStyle = {},
  isShowBack = false,
  onBackPress,
  onCartPress,
  isShowCart = false,
}: any) => {

  return (
    <View style={[styles.headerContainer, containerStyle]}>
      {isShowBack ? (
        <TouchableOpacity style={styles.leftContainer} onPress={onBackPress}>
          <IconLeftArrow
            width={34 * Dimensions.RESPONSIVE_WIDTH}
            height={34 * Dimensions.RESPONSIVE_WIDTH}
            stroke={Colors.SECONDARY_COLOR}
          />
        </TouchableOpacity>
      ) : null}
      <View style={styles.centerContainer}>
        {title !== '' ? (
          <Text style={[Typography.LABEL.l1, {color: Colors.SECONDARY_COLOR}]} numberOfLines={1}>
            {title}
          </Text>
        ) : null}
      </View>
      {isShowCart ? (
        <TouchableOpacity
          style={styles.rightContainer}
          onPress={() =>
            onCartPress()
          }>
          <IconCart
              width={34 * Dimensions.RESPONSIVE_WIDTH}
              height={34 * Dimensions.RESPONSIVE_WIDTH}
              fill={Colors.SECONDARY_COLOR}
            />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: Dimensions.WIDTH,
    height: 56 * Dimensions.RESPONSIVE_WIDTH,
  },
  leftContainer: {
    width: 70 * Dimensions.RESPONSIVE_WIDTH,
    height: 56 * Dimensions.RESPONSIVE_WIDTH,
    paddingLeft: 9 * Dimensions.RESPONSIVE_WIDTH,
    justifyContent: 'center',
  },
  centerContainer: {
    position: 'absolute',
    width: Dimensions.WIDTH - 140 * Dimensions.RESPONSIVE_WIDTH,
    height: 56 * Dimensions.RESPONSIVE_WIDTH,
    top: 0,
    left: 70 * Dimensions.RESPONSIVE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 70 * Dimensions.RESPONSIVE_WIDTH,
    height: 56 * Dimensions.RESPONSIVE_WIDTH,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
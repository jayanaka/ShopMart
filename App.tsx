/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Toast, {
  BaseToast,
  BaseToastProps,
  ErrorToast,
  InfoToast,
} from 'react-native-toast-message';

import Colors from './src/theme/Colors';
import {Typography} from './src/theme/Typography';
import Dimensions from './src/theme/Dimensions';
import {store} from './src/redux/store';
import {persistStore} from 'redux-persist';
import MainNavigation from './src/navigation/MainNavigation';

const toastConfig = {
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={[styles.toastStyle, {borderLeftColor: Colors.TOAST_SUCCESS_COLOR}]}
      contentContainerStyle={styles.toastContentStyle}
      text1Style={[Typography.TOAST.l1]}
      text2Style={[Typography.TOAST.l2, styles.toastTextStyle]}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={[styles.toastStyle, {borderLeftColor: Colors.TOAST_ERROR_COLOR}]}
      contentContainerStyle={styles.toastContentStyle}
      text1Style={[Typography.TOAST.l1]}
      text2Style={[Typography.TOAST.l2, styles.toastTextStyle]}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
  info: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <InfoToast
      {...props}
      style={[styles.toastStyle, {borderLeftColor: Colors.TOAST_INFO_COLOR}]}
      contentContainerStyle={styles.toastContentStyle}
      text1Style={[Typography.TOAST.l1]}
      text2Style={[Typography.TOAST.l2, styles.toastTextStyle]}
      text1NumberOfLines={1}
      text2NumberOfLines={3}
    />
  ),
};

const App = () => {
  const persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer
          fallback={<ActivityIndicator color="blue" size="large" />}>
          <MainNavigation />
        </NavigationContainer>
        <Toast config={toastConfig} topOffset={54} />
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  toastStyle: {
    width: Dimensions.WIDTH - 32 * Dimensions.RESPONSIVE_WIDTH,
    height: 'auto',
    borderLeftWidth: 7,
  },
  toastContentStyle: {
    paddingHorizontal: 15 * Dimensions.RESPONSIVE_WIDTH,
    paddingVertical: 15 * Dimensions.RESPONSIVE_WIDTH,
  },
  toastTextStyle: {
    marginTop: 2 * Dimensions.RESPONSIVE_WIDTH,
  },
});

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Linking, ActivityIndicator} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {StyleSheet, View} from 'react-native';
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
import { store } from './src/redux/store';
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
          fallback={<ActivityIndicator color="blue" size="large" />}
          >
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

// import React from 'react';
// import type {PropsWithChildren} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = PropsWithChildren<{
//   title: string;
// }>;

// function Section({children, title}: SectionProps): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): React.JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;

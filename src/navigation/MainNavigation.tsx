import React from 'react';
import {Platform, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import SpinnerOverlay from '../common/SpinnerOverlay';
import { useAppSelector } from '../hooks/useRedux';

const Stack = createNativeStackNavigator();

const MainNavigation = (props: any) => {
  const {loading} = useAppSelector(state => state.app);

  return (
    <View style={{flex: 1}}>
    <Stack.Navigator
      initialRouteName={props.initialScreen}
    >
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </Stack.Navigator>

    <SpinnerOverlay visible={loading && loading === 1 ? true : false} />
    </View>
  );
};

export default MainNavigation;

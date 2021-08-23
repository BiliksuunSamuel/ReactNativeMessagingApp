import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  SplashScreen,
  HomeScreen,
  ChatScreen,
  ContactsScreen,
  LoginScreen,
  RegisterScreen,
  ProfileScreen,
  UpdateInfoScreen,
} from '../screens';
import {HomeNavParams} from '../types/params';
import {TransitionSpec} from '@react-navigation/stack/lib/typescript/src/types';

////////////////////
const Stack = createStackNavigator<HomeNavParams>();
const config: TransitionSpec = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
//////////////

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
        // gestureEnabled: true,
        // gestureDirection: 'horizontal',
        transitionSpec: {
          open: config,
          close: config,
        },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
      <Stack.Screen name="Contacts" component={ContactsScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="UpdateInfo" component={UpdateInfoScreen} />
    </Stack.Navigator>
  );
}

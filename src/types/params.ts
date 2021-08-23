import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/core';

export type HomeNavParams = {
  Home: undefined;
  Login: undefined;
  Chat: undefined;
  Contacts: undefined;
  Register: undefined;
  Splash: undefined;
  Profile: undefined;
  UpdateInfo: undefined;
};

export type AccountNavParams = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  Splash: undefined;
};

///////////////////////
export type HomeNavProps<T extends keyof HomeNavParams> = {
  navigation: StackNavigationProp<HomeNavParams, T>;
  route: RouteProp<HomeNavParams, T>;
};
///////////////////////
export type AccountNavProps<T extends keyof AccountNavParams> = {
  navigation: StackNavigationProp<AccountNavParams, T>;
  route: RouteProp<AccountNavParams, T>;
};

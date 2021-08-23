import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {HomeStack} from '../stacks';

///////////////
export default function Router() {
  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
}

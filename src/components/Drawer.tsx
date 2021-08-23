import React, {useState} from 'react';
import {View, Text, Touchable} from 'react-native';
import {drawer_styles as styles} from '../styles';
import Drawer from 'react-native-side-drawer';
import {TouchableRipple} from 'react-native-paper';

type opendrawer = {
  open: boolean;
  handleClose: () => void;
};
///////////////////////
const drawerContent = () => {
  return (
    <View style={styles.drawer_content}>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
    </View>
  );
};
///
export default function DrawerMenu({open, handleClose}: opendrawer) {
  return (
    <Drawer
      open={open}
      drawerPercentage={45}
      drawerContent={drawerContent()}
      animationTime={350}
      overlay={true}
      position="right"
      opacity={1}
    />
  );
}

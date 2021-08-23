import React from 'react';
import {View, Text} from 'react-native';
import {home_styles as styles} from '../styles';
import {Avatar, ListItem} from 'react-native-elements';
import {avatar} from '../resources/Resources';
import {user_details} from '../types/types';

type contactParams = {
  handleNavigation: () => void;
  info?: user_details;
};
export default function Contact({handleNavigation, info}: contactParams) {
  return (
    <ListItem bottomDivider onPress={handleNavigation}>
      <Avatar rounded source={avatar} size="small" />
      <ListItem.Content>
        <ListItem.Title>{info ? info.username : 'Username'}</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1}>{info?.status}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

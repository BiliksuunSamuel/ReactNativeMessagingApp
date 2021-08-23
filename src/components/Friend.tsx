import React from 'react';
import {View, Text} from 'react-native';
import {home_styles as styles} from '../styles';
import {Avatar, ListItem} from 'react-native-elements';
import {avatar} from '../resources/Resources';

type friendParams = {
  handleNavigation: () => void;
};
export default function Friend({handleNavigation}: friendParams) {
  return (
    <ListItem bottomDivider onPress={handleNavigation}>
      <Avatar rounded source={avatar} size="small" />
      <ListItem.Content>
        <View style={styles.info_moment}>
          <ListItem.Title>Contact name</ListItem.Title>
          <Text numberOfLines={1} style={styles.moment}>
            last seen
          </Text>
        </View>
        <ListItem.Subtitle numberOfLines={1}>
          last message sent
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
}

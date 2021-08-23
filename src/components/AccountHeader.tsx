import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';
import {avatar} from '../resources/Resources';
import {Title} from 'react-native-paper';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../constants/colors';
import {home_styles as styles} from '../styles';
import {user_details} from '../types/types';

type accountparams = {
  navigateProfile: () => void;
  user: user_details | null;
};
export default function AccountHeader({navigateProfile, user}: accountparams) {
  return (
    <Header
      leftComponent={<Avatar rounded size="medium" source={avatar} />}
      backgroundColor={colors.Pink400}
      centerComponent={
        <View style={styles.account_info}>
          <Title numberOfLines={1} style={styles.username}>
            {user && user.username}
          </Title>
          <Text numberOfLines={1} style={styles.status}>
            {user && user.status}
          </Text>
        </View>
      }
      rightComponent={
        <View style={styles.menu}>
          <EvilIcons
            style={styles.menu_icons}
            name="search"
            color={colors.White0}
            size={28}
          />
          <Entypo
            style={styles.menu_icons}
            name="dots-three-vertical"
            color={colors.white}
            size={24}
            onPress={navigateProfile}
          />
        </View>
      }
    />
  );
}

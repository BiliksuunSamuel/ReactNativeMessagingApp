import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Header} from 'react-native-elements';
import colors from '../constants/colors';
import {home_styles as styles} from '../styles';
import {Title} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {color} from 'react-native-elements/dist/helpers';
type chatheaderprops = {
  handleNavigation: () => void;
  drawerToggle: () => void;
};
export default function ChatHeader({
  handleNavigation,
  drawerToggle,
}: chatheaderprops) {
  return (
    <Header
      leftComponent={
        <AntDesign
          name="arrowleft"
          size={28}
          color={colors.white}
          style={{marginLeft: 10}}
          onPress={handleNavigation}
        />
      }
      backgroundColor={colors.Pink400}
      centerComponent={
        <View style={styles.account_info}>
          <Title numberOfLines={1} style={styles.username}>
            Active Friend Name
          </Title>
          <Text numberOfLines={1} style={styles.status}>
            chat state
          </Text>
        </View>
      }
      rightComponent={
        <Entypo
          style={{marginRight: 15}}
          name="dots-three-vertical"
          color={colors.white}
          size={24}
          onPress={drawerToggle}
        />
      }
    />
  );
}

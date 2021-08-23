import React from 'react';
import {View, Text} from 'react-native';
import {Header, Avatar} from 'react-native-elements';
import colors from '../constants/colors';
import {profile_styles as styles} from '../styles';
import Entypo from 'react-native-vector-icons/Entypo';
import {Title} from 'react-native-paper';
import {avatar} from '../resources/Resources';

///////////////
type profileheaderparams = {
  navigateBack: () => void;
};
/////////////////////
export default function ProfileHeader({navigateBack}: profileheaderparams) {
  return (
    <Header
      backgroundColor={colors.Pink400}
      leftComponent={
        <View style={styles.left_component}>
          <Entypo
            name="chevron-left"
            size={20}
            color={colors.White0}
            style={{marginHorizontal: 4, paddingHorizontal: 5}}
            onPress={navigateBack}
          />
          <Avatar rounded size="medium" source={avatar} />
        </View>
      }
      centerComponent={
        <Title numberOfLines={1} style={styles.username}>
          Account Username
        </Title>
      }
    />
  );
}

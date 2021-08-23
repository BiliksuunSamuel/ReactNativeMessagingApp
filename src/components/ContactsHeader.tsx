import React from 'react';
import {View, Text} from 'react-native';
import {Header} from 'react-native-elements';
import {Title} from 'react-native-paper';
import colors from '../constants/colors';
import {home_styles as styles} from '../styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HomeNavProps} from '../types/params';

type hparams = {
  handleNavigation: () => void;
  count?: number;
};

/////////////////////////
export default function ContactsHeader({handleNavigation, count}: hparams) {
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
            Contacts
          </Title>
          <Text numberOfLines={1} style={styles.status}>
            {`Available ${count && count}`}
          </Text>
        </View>
      }
    />
  );
}

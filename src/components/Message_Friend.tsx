import React from 'react';
import {View, Text} from 'react-native';
import {chat_styles as styles} from '../styles';

export default function Message_Friend() {
  return (
    <View style={styles.chat}>
      <View style={styles.bot} />
      <Text style={styles.message}>hello good</Text>
      <Text style={styles.message_time}>00.00am</Text>
    </View>
  );
}

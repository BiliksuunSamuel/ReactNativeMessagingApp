import React from 'react';
import {View, Text} from 'react-native';
import {chat_styles as styles} from '../styles';
export default function Message_Me() {
  return (
    <View style={styles.chat_me}>
      <View style={styles.bot_me} />
      <Text style={styles.message}>hi</Text>
      <Text style={styles.message_time}>11.11am</Text>
    </View>
  );
}

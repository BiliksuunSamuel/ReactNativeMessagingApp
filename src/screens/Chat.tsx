import React, {useState} from 'react';
import {View, Text, StatusBar, Keyboard} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {IconButton} from 'react-native-paper';
import {
  ChatHeader,
  EmojiPicker,
  Message_Friend,
  Message_Me,
} from '../components';
import colors from '../constants/colors';
import {chat_styles as styles} from '../styles';
import {HomeNavProps} from '../types/params';
import FilePicker from 'react-native-file-picker';
import {GenerateBlob, makeDir} from '../services/Services';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
/////////////////////////
export default function Chat({navigation, route}: HomeNavProps<'Chat'>) {
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const handleNavigation = () => {
    navigation.navigate('Home');
  };
  const [msg, setMsg] = useState<any>('');
  /////////////////////handle file selection
  const handleFile = () => {
    try {
      FilePicker.showFilePicker(async function (response) {
        if (response.didCancel) {
          console.log('file selection canceled');
          return;
        }
        if (response.error) {
          console.log('error in picking file');
          return;
        }
        //const results = await GenerateBlob(response);
        // const results = makeDir('BillsImages');
        // console.log(results);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [open, setOpen] = useState<boolean>(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleMsg = (e: any) => {
    setMsg(msg + e);
  };
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
      <ChatHeader
        handleNavigation={handleNavigation}
        drawerToggle={handleOpen}
      />

      <>
        <ScrollView
          style={styles.chat_scroll}
          contentContainerStyle={styles.chat_container}>
          <Message_Friend />
          <Message_Me />
        </ScrollView>
        <View style={styles.form_group}>
          <View style={styles.message_form}>
            <IconButton
              icon="file"
              onPress={handleFile}
              size={18}
              color={colors.Pink100}
            />
            <View style={styles.input_group}>
              <TextInput
                style={styles.input}
                multiline
                placeholder="message..."
                onTouchEnd={() => {
                  setShowEmoji(false);
                }}
                value={msg}
                onChangeText={(text) => setMsg(text)}
              />
            </View>
            <MaterialIcons
              name="emoji-emotions"
              size={18}
              color={colors.Pink100}
              style={{marginRight: 10}}
            />
            <IconButton icon="send" size={18} color={colors.IndigoA700} />
          </View>
          {showEmoji && <EmojiPicker handleMsg={handleMsg} />}
        </View>
      </>
    </View>
  );
}

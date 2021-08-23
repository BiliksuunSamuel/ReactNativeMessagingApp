import React from 'react';
import {View, Text} from 'react-native';
import EmojiSelector, {Categories} from 'react-native-emoji-selector';
import colors from '../constants/colors';

type pickerParams = {
  handleMsg: (re: any) => void;
};
export default function EmojiPicker({handleMsg}: pickerParams) {
  return (
    <View style={{height: 400, width: '100%'}}>
      <EmojiSelector
        category={Categories.all}
        showSectionTitles
        showTabs
        theme={colors.White200}
        showHistory
        columns={6}
        showSearchBar={false}
        onEmojiSelected={(results) => {
          handleMsg(results);
        }}
      />
    </View>
  );
}

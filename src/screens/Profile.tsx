import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import colors from '../constants/colors';
import {profile_styles as styles} from '../styles';
import {ProfileHeader} from '../components';
import {HomeNavProps} from '../types/params';
import {ListItem} from 'react-native-elements';
import {AntDesign, Entypo, Feather} from '../constants/icons';
import {Button, TextInput} from 'react-native-paper';
import FilePicker from 'react-native-file-picker';
import {
  changeProfilePicture,
  GenerateBlob,
  updateStatus,
} from '../services/Services';
import storage from '@react-native-firebase/storage';
import {useAppDispatch, useAppSelector} from '../controller/store/hooks';
import {formatURL} from '../utils/formatUrl';
import firebase from '@react-native-firebase/app';

////////////////////
export default function Profile({navigation, route}: HomeNavProps<'Profile'>) {
  const {user, loading, error} = useAppSelector((state) => state.UserReducer);
  const [status, setStatus] = useState<string>(user?.status || '');
  const [image, setImage] = useState<{
    phone: string | undefined;
    file: any;
    type: string;
  }>({phone: '', file: null, type: ''});
  /////////////////////////////////
  const handleStatus = () => {
    dispatch(updateStatus({status: status, phone: user?.phone || ''}));
  };
  const dispatch = useAppDispatch();
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
        const results: any = await GenerateBlob(response);
        try {
          const metadata = {
            contentType: 'image',
          };
          const firebaseConfig = {
            apiKey: 'AIzaSyAyYVK8EzBJEObbzKE02-9npFYReOI-Ulo',
            authDomain: 'wechat-nmoanfuni.firebaseapp.com',
            projectId: 'wechat-nmoanfuni',
            storageBucket: 'wechat-nmoanfuni.appspot.com',
            messagingSenderId: '13261852304',
            appId: '1:13261852304:web:0573a0fcfc5bfebec61215',
            measurementId: 'G-S24Z387PSL',
          };
          await firebase.initializeApp(firebaseConfig);
          const fileRef = storage().ref();
          const newfile = await fileRef.putFile(response.path);

          const url = await newfile.ref.getDownloadURL();
          console.log(url);
        } catch (error) {
          if (error) {
            console.log(error);
          }
        }

        //dispatch(changeProfilePicture(formData));
      });
    } catch (error) {
      if (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    // effect

    return () => {
      // cleanup
    };
  }, [user, loading, error]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
      <ProfileHeader navigateBack={() => navigation.navigate('Home')} />
      <ListItem bottomDivider onPress={() => navigation.navigate('UpdateInfo')}>
        <AntDesign name="user" size={20} color={colors.Black400} />
        <ListItem.Content>
          <ListItem.Title numberOfLines={1}>Account Info</ListItem.Title>
        </ListItem.Content>
      </ListItem>
      <View style={styles.status}>
        <TextInput
          placeholder="status text"
          onChangeText={(text) => setStatus(text)}
          style={styles.input}
          value={status || ''}
          mode="flat"
        />

        <Button
          mode="contained"
          style={{
            alignSelf: 'center',
            marginRight: 8,
            height: '70%',
            marginTop: 10,
          }}
          onPress={handleStatus}
          color={colors.Indigo800}>
          Send
        </Button>

        {/* <Feather
          style={styles.status_button}
          name="edit"
          color={colors.Pink400}
          size={24}
          onPress={handleStatus}
        /> */}
      </View>
      <ListItem bottomDivider style={{marginTop: 10}} onPress={handleFile}>
        <AntDesign name="picture" size={28} color={colors.Indigo500} />
        <ListItem.Content>
          <ListItem.Title>Change Profile Picture</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </View>
  );
}

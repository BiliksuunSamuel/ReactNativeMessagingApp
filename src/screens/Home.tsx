import React, {useState, useEffect} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {AccountHeader, Friend} from '../components';
import colors from '../constants/colors';
import {home_styles as styles} from '../styles';
import {FAB} from 'react-native-paper';
import {HomeNavProps} from '../types/params';
import {useAppDispatch, useAppSelector} from '../controller/store/hooks';
import {user_details} from '../types/types';
import {initialUser} from '../types/data';
import {contactsThunk} from '../controller/slice/contactsSlice';
//////////////
export default function Home({navigation, route}: HomeNavProps<'Home'>) {
  const {user, loading, error} = useAppSelector((state) => state.UserReducer);
  const [userInfo, setUserInfo] = useState<user_details | null>(initialUser);
  const dispatch = useAppDispatch();
  const handleNavigation = () => {
    navigation.navigate('Chat');
  };

  //////////////////////
  useEffect(() => {
    setUserInfo(user);
    console.log(userInfo?.id);
    return () => {
      // cleanup
      dispatch(contactsThunk(userInfo?.phone));
    };
  }, [user]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
      <AccountHeader
        user={userInfo}
        navigateProfile={() => navigation.navigate('Profile')}
      />
      <>
        <ScrollView>
          <Friend handleNavigation={handleNavigation} />
          <Friend handleNavigation={handleNavigation} />
          <Friend handleNavigation={handleNavigation} />
          <Friend handleNavigation={handleNavigation} />
          <Friend handleNavigation={handleNavigation} />
          <Friend handleNavigation={handleNavigation} />
          <Friend handleNavigation={handleNavigation} />
          <Friend handleNavigation={handleNavigation} />
        </ScrollView>
      </>
      <FAB
        color={colors.White0}
        onPress={() => {
          dispatch(contactsThunk(userInfo?.phone));
          navigation.navigate('Contacts');
        }}
        icon="chat"
        style={styles.fab}
      />
    </View>
  );
}

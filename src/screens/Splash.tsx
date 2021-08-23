import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Dimensions, StatusBar} from 'react-native';
import colors from '../constants/colors';
import {contactsThunk} from '../controller/slice/contactsSlice';
import {useAppDispatch, useAppSelector} from '../controller/store/hooks';
import {splash_bg} from '../resources/Resources';
import {splash_styles as styles} from '../styles';
import {AccountNavProps} from '../types/params';

/////////////////////
export default function Splash({navigation, route}: AccountNavProps<'Splash'>) {
  const {user, loading, error} = useAppSelector((state) => state.UserReducer);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (user) {
      navigation.replace('Home');
      dispatch(contactsThunk(user.phone?.toString()));
    } else {
      navigation.replace('Login');
    }
    return () => {
      // clearTimeout(redirect);
    };
  }, [user]);
  return (
    <ImageBackground
      width={width}
      height={height}
      source={splash_bg}
      resizeMethod="auto"
      style={styles.root}
      resizeMode="cover">
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
    </ImageBackground>
  );
}

const {width, height} = Dimensions.get('screen');

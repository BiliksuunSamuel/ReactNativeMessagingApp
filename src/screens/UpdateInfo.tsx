import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar} from 'react-native';
import {Header} from 'react-native-elements/dist/header/Header';
import {TextInput, Title} from 'react-native-paper';
import {Entypo} from '../constants/icons';
import colors from '../constants/colors';
import {updateinfo_styles as styles} from '../styles';
import {HomeNavProps} from '../types/params';
import DropDown from 'react-native-dropdown-picker';
import {genderData} from '../types/data';
import {dropdownItem, genderDrowpdown} from '../types/types';
import {useAppSelector} from '../controller/store/hooks';
////////////////////////
export default function UpdateInfo({
  navigation,
  route,
}: HomeNavProps<'UpdateInfo'>) {
  const {user, loading, error} = useAppSelector((state) => state.UserReducer);
  /////////////////
  const [genderOpen, setGenderOpen] = useState<boolean>(false);
  const [gender, setGender] = useState(null);
  const [genderItems, setGenderItem] = useState<genderDrowpdown>(genderData);
  const [userData, setUserData] = useState<{
    username: string;
    phone: string;
    email: string;
    location: string;
    town: string;
    gender: string;
  }>({
    username: user?.username || '',
    phone: user?.phone || '',
    email: user?.email || '',
    location: '',
    town: '',
    gender: '',
  });
  /////////////////
  useEffect(() => {
    setUserData({
      username: user?.username || '',
      phone: user?.phone || '',
      email: user?.email || '',
      location: '',
      town: '',
      gender: '',
    });
    return () => {
      // cleanup
    };
  }, [user, loading, error]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
      <Header
        backgroundColor={colors.Pink400}
        leftComponent={
          <Entypo
            name="chevron-left"
            size={24}
            color={colors.white}
            style={{marginLeft: 10}}
            onPress={() => navigation.navigate('Home')}
          />
        }
        centerComponent={
          <Title numberOfLines={1} style={{color: colors.white}}>
            Update Account Info
          </Title>
        }
      />
      <>
        <View style={styles.fields_container}>
          <TextInput
            mode="outlined"
            placeholder="account username"
            style={styles.field_input}
            value={userData.username}
            onChangeText={(text) => setUserData({...userData, username: text})}
          />
          <TextInput
            mode="outlined"
            placeholder="phone number"
            style={styles.field_input}
            value={userData.phone}
            onChangeText={(text) => setUserData({...userData, phone: text})}
          />
          <TextInput
            mode="outlined"
            placeholder="email address"
            style={styles.field_input}
            value={userData.email}
            onChangeText={(text) => setUserData({...userData, email: text})}
          />
          <TextInput
            mode="outlined"
            placeholder="location address"
            style={styles.field_input}
            value={userData.location}
            onChangeText={(text) => setUserData({...userData, location: text})}
          />
          <TextInput
            mode="outlined"
            placeholder="home town"
            style={styles.field_input}
            value={userData.town}
            onChangeText={(text) => setUserData({...userData, town: text})}
          />
          <Text style={styles.field_label}>Gender</Text>
          <DropDown
            value={gender}
            items={genderItems}
            open={genderOpen}
            setOpen={setGenderOpen}
            setItems={setGenderItem}
            setValue={setGender}
          />
        </View>
      </>
    </View>
  );
}

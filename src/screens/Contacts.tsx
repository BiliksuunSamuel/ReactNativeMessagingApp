import React, {useEffect, useState} from 'react';
import {View, Text, StatusBar, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Contact, ContactsHeader} from '../components';
import colors from '../constants/colors';
import {contactsThunk} from '../controller/slice/contactsSlice';
import {useAppDispatch, useAppSelector} from '../controller/store/hooks';
import {contacts_styles as styles} from '../styles';
import {HomeNavProps} from '../types/params';
import {user_details} from '../types/types';

//////////////////////
export default function Contacts({
  navigation,
  route,
}: HomeNavProps<'Contacts'>) {
  const dispatch = useAppDispatch();
  const handleChatNavigation = () => {
    navigation.navigate('Chat');
  };
  const {contacts, error, loading} = useAppSelector(
    (state) => state.ContactsReducer,
  );
  const {
    user,
    error: err,
    loading: load,
  } = useAppSelector((state) => state.UserReducer);
  const [users, setUsers] = useState<user_details[] | []>([]);
  /////////////
  useEffect(() => {
    let isMounted = true;
    setUsers(contacts);
    return () => {
      isMounted = false;
      dispatch(contactsThunk(user?.phone));
    };
  }, [contacts]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
      <ContactsHeader
        count={users.length}
        handleNavigation={() => navigation.navigate('Home')}
      />
      <FlatList
        data={users}
        keyExtractor={(user) => user.phone?.toString()}
        renderItem={({item}: {item: user_details}) => (
          <Contact handleNavigation={handleChatNavigation} info={item} />
        )}
      />
    </View>
  );
}

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TextInput,
  StyleSheet,
  Keyboard,
} from 'react-native';
import colors from '../constants/colors';
import {account_styles as styles} from '../styles';
import * as Elements from 'react-native-elements';
import * as Paper from 'react-native-paper';
import {AccountNavProps} from '../types/params';
import {form_field, login_params} from '../types/types';
import {useAppDispatch, useAppSelector} from '../controller/store/hooks';
import {handleLoginValidation} from '../utils/validation';
import {loginThunk} from '../controller/slice/loginSlice';
import {UserSuccess} from '../controller/slice/userSlice';
import {contactsThunk} from '../controller/slice/contactsSlice';
//////////////////////////////
export default function Login({navigation, route}: AccountNavProps<'Login'>) {
  const dispatch = useAppDispatch();
  const {user, loading, error} = useAppSelector((state) => state.LoginReducer);
  //formstate
  const [form, setForm] = useState<login_params>({
    valid: false,
    error: null,
    phone: '',
    password: '',
  });
  ///fill form data
  const handleForm = (e: form_field) => {
    setForm({...form, [e.label]: e.value});
  };

  const initLogin = async () => {
    Keyboard.dismiss();
    const valid_form = handleLoginValidation(form);
    setForm(valid_form);
    if (valid_form.valid) {
      await dispatch(loginThunk(form));
      dispatch(UserSuccess(user));
      // console.log(results);
    }
  };

  //////////////////////
  useEffect(() => {
    if (user) {
      dispatch(UserSuccess(user));
      dispatch(contactsThunk(user.phone?.toString()));
      navigation.replace('Home');
    }
    setForm({...form, error});
    return () => {
      //cleanup
    };
  }, [user, error, loading]);

  ///////////////////////////
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
      <View style={styles.container}>
        <>
          <View style={styles.form}>
            <TextInput
              placeholder="phone number"
              keyboardType="number-pad"
              style={styles.input}
              onChangeText={(text) => handleForm({label: 'phone', value: text})}
            />
            <TextInput
              placeholder="password"
              secureTextEntry
              style={styles.input}
              onChangeText={(text) =>
                handleForm({label: 'password', value: text})
              }
            />
            <Paper.Button
              mode="contained"
              style={styles.button}
              color={colors.Pink400}
              onPress={initLogin}
              disabled={loading}
              loading={loading}>
              Login
            </Paper.Button>
            <Paper.Button
              uppercase={false}
              mode="outlined"
              style={styles.link}
              color={colors.Pink400}
              onPress={() => navigation.navigate('Register')}>
              don't hav Account?
            </Paper.Button>

            {form.error && (
              <Text
                style={{
                  padding: 8,
                  width: '100%',
                  textAlign: 'center',
                  marginTop: 10,
                  color: colors.Red900,
                }}>
                {form.error}
              </Text>
            )}
          </View>
        </>
      </View>
    </View>
  );
}

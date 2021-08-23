import React, {useEffect, useState} from 'react';
import {View, Text, TextInput, StatusBar, Keyboard} from 'react-native';
import {account_styles as styles} from '../styles';
import * as Paper from 'react-native-paper';
import colors from '../constants/colors';
import {AccountNavProps} from '../types/params';
import {useAppDispatch, useAppSelector} from '../controller/store/hooks';
import {form_field, register_params} from '../types/types';
import {registerThunk} from '../controller/slice/registerSlice';
import {handleRegisterValidation} from '../utils/validation';

export default function Register({
  navigation,
  route,
}: AccountNavProps<'Register'>) {
  const dispatch = useAppDispatch();
  const {user, loading, error} = useAppSelector(
    (state) => state.RegisterReducer,
  );
  const [form, setForm] = useState<register_params>({
    username: '',
    phone: '',
    password: '',
    valid: false,
    error: null,
  });
  //////////////
  const handleForm = (info: form_field) => {
    setForm({...form, [info.label]: info.value});
  };
  //////////////////
  const initRegister = async () => {
    Keyboard.dismiss();
    const valid_form = handleRegisterValidation(form);
    setForm(valid_form);
    if (valid_form.valid) {
      await dispatch(registerThunk(form));
    }
  };

  ///////////////
  useEffect(() => {
    if (user) {
      navigation.replace('Login');
    }
    setForm({...form, error});
    return () => {
      // cleanup
    };
  }, [user, loading, error]);
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Pink400} />
      <View style={styles.container}>
        <>
          <View style={styles.form}>
            <TextInput
              placeholder="username"
              onChangeText={(text) =>
                handleForm({label: 'username', value: text})
              }
              style={styles.input}
            />
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
              onPress={initRegister}
              disabled={loading}
              loading={loading}>
              Register
            </Paper.Button>
            <Paper.Button
              mode="outlined"
              style={styles.link}
              color={colors.Pink400}
              uppercase={false}
              onPress={() => navigation.navigate('Login')}>
              already Registered?
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

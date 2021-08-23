import {login_params, register_params} from './../types/types';

export function handleLoginValidation(info: login_params) {
  if (info.phone.length <= 0) {
    return {...info, valid: false, error: 'phone number required'};
  }
  if (info.password.length <= 0) {
    return {...info, valid: false, error: 'password required'};
  }

  return {...info, valid: true, error: null};
}

export function handleRegisterValidation(info: register_params) {
  if (info.username.length <= 0) {
    return {...info, valid: false, error: 'username required'};
  }
  if (isNaN(parseInt(info.phone)) && info.phone.length != 10) {
    return {
      ...info,
      valid: false,
      error: 'invalid phone number, 10 digits required',
    };
  }
  if (info.password.length < 4) {
    return {
      ...info,
      valid: false,
      error: 'password must be 4 characters and above',
    };
  }

  return {...info, valid: true, error: null};
}

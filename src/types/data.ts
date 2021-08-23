import {
  genderDrowpdown,
  user_details,
  loginStateType,
  registerStateType,
  userStateType,
  contactStateType,
} from './types';

//////////GENDER DROP DATA
export const genderData: genderDrowpdown = [
  {label: 'Male', value: 'male'},
  {label: 'Female', value: 'female'},
  {label: 'Others', value: 'others'},
  {label: 'Unknown', value: 'unknown'},
];

export const initialUser: user_details = {
  id: '',
  username: null,
  lastLogin: null,
  isAdmin: false,
  isLogin: false,
  profile: null,
  email: null,
  dateCreated: null,
  phone: '',
  friends: null,
  status: null,
  lastseen: null,
};

export const loginState: loginStateType = {
  user: null,
  loading: false,
  error: null,
};

export const registerState: registerStateType = {
  user: null,
  loading: false,
  error: null,
};

export const userState: userStateType = {
  user: null,
  loading: false,
  error: null,
};

export const contactsState: contactStateType = {
  loading: false,
  error: null,
  contacts: [],
};

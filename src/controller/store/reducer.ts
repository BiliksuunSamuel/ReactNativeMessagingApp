import {combineReducers} from 'redux';
import {
  LoginReducer,
  RegisterReducer,
  UserReducer,
  ContactsReducer,
} from '../slice/index';

//////////////////
const reducer = combineReducers({
  LoginReducer,
  RegisterReducer,
  UserReducer,
  ContactsReducer,
});

export default reducer;

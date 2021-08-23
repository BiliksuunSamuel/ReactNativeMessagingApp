import {account_info} from './../types/types';
import {formatURL} from './../utils/formatUrl';
import Axios from 'axios';

async function handleRegisterAPI(data: account_info) {
  try {
    const response = await Axios.post(formatURL('register'), data);
    return response.data;
  } catch (error) {
    return {
      status_code: error?.response.status,
      message: error?.response?.data,
    };
  }
}

export default handleRegisterAPI;

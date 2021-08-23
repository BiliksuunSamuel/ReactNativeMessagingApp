import {login_params} from './../types/types';
import {formatURL} from './../utils/formatUrl';
import Axios from 'axios';

/////FUNCTION TO HANDLE THE LOGIN REQUEST FROM THE SERVER

async function handleLoginAPI(data: login_params) {
  try {
    const response = await Axios.post(formatURL('login'), data);
    return response.data;
  } catch (error) {
    return {
      status_code: error?.response.status,
      message: error?.response?.data,
    };
  }
}

export default handleLoginAPI;

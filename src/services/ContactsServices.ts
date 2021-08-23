import {formatURL} from './../utils/formatUrl';
import Axios from 'axios';

function getContactsAPI(phone: string | undefined) {
  return new Promise(async function (resolve, reject) {
    try {
      const response = await Axios.post(formatURL('contacts'), {phone});
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
}

export default getContactsAPI;

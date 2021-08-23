import {formatURL} from './../utils/formatUrl';
import {FilePickerResult} from 'react-native-file-picker';
import RNFS from 'react-native-fs';
import Axios from 'axios';
import {useAppDispatch} from '../controller/store/store';
import {
  UserFail,
  UserLoading,
  UserSuccess,
} from '../controller/slice/userSlice';
import {request} from 'http';
/////////////generating a base64 file
export async function GenerateBlob(file: FilePickerResult) {
  return new Promise(function (resolve, reject) {
    try {
      RNFS.readFile(file.path, 'base64')
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    } catch (error) {
      reject(error);
    }
  });
}

///////MAKER LOCAL DIRECTORY
export async function makeDir(path: string) {
  return new Promise(function (resolve, reject) {
    try {
      const root = RNFS.DocumentDirectoryPath + '/' + path;
      RNFS.mkdir(root);
    } catch (error) {
      reject(error);
    }
  });
}

/////////////////UPDATE THE USER PROFILE PICTURE
export const changeProfilePicture =
  (data: any) => async (dispatch: useAppDispatch) => {
    dispatch(UserLoading());
    try {
      const res = await Axios.post(formatURL('update_profile'), data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          type: 'application/json',
        },
      });
      console.log(res);
    } catch (error) {
      if (error) {
        console.log(error?.response.data);
      }
    }
  };

export const updateStatus =
  (info: {phone: string; status: string | undefined}) =>
  async (dispatch: useAppDispatch) => {
    dispatch(UserLoading());
    try {
      const res = await Axios.post(formatURL('status'), info);
      dispatch(UserSuccess(res.data));
    } catch (error) {
      dispatch(UserFail(error?.respose.data));
    }
  };

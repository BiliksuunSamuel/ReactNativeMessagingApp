import firebase from 'firebase/app';
import 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyAyYVK8EzBJEObbzKE02-9npFYReOI-Ulo',
  authDomain: 'wechat-nmoanfuni.firebaseapp.com',
  projectId: 'wechat-nmoanfuni',
  storageBucket: 'wechat-nmoanfuni.appspot.com',
  messagingSenderId: '13261852304',
  appId: '1:13261852304:web:0573a0fcfc5bfebec61215',
  measurementId: 'G-S24Z387PSL',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

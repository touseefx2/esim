import {Storage} from 'redux-persist';
import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const reduxStorage: Storage = {
  // setItem: (key, value) => {
  //   storage.set(key, value);
  //   return Promise.resolve(true);
  // },
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(); // ✅ Correct return type
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};

export default reduxStorage;

import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV();

export const appStorage = {
  setItem: (key, value) => {
    try {
      if (typeof value == 'undefined' || typeof key == 'undefined') {
        console.log('key >>>', key);
        console.log('value >>>', value);
      } else {
        storage.set(key, value);
      }
    } catch (e) {
      console.log("can't save data", e);
    }
  },

  getItem: key => {
    if (storage.contains(key)) {
      return storage.getString(key);
    } else {
      console.log("Can't get data >>", key);
      return undefined;
    }
  },

  deleteItem: key => storage.delete(key),

  containsItem: key => {
    return storage.contains(key);
  },

  getAllKeys: () => {
    return storage.getAllKeys();
  },
};

export default appStorage;

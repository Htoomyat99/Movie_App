import {createSlice} from '@reduxjs/toolkit';
import {useEffect} from 'react';
import {ToastAndroid} from 'react-native';
import appStorage from '../../utils/appStorage';

const initialState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const {id} = action.payload;
      const index = state.value.findIndex(item => item.id === id);
      if (index !== -1) {
        state.value = state.value.filter(item => item.id !== id);
        ToastAndroid.show(
          'Remove from Favorite successfully',
          ToastAndroid.SHORT,
        );
      } else {
        const newItem = action.payload;
        state.value.push(newItem);
        ToastAndroid.show('Add to Favorite successfully', ToastAndroid.SHORT);
      }
      appStorage.setItem('@favoriteData', JSON.stringify(state.value));
    },
  },
});

export const {toggleFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;

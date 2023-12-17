import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './favorite/favoriteSlice';

export const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

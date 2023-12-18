import {createSlice} from '@reduxjs/toolkit';

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
      } else {
        const newItem = action.payload;
        state.value.push(newItem);
      }
    },
  },
});

export const {toggleFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;

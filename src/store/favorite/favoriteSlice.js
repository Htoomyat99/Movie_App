import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      // Check if the item is already in the favorites
      const existingIndex = state.value.findIndex(
        item => item.id === action.payload.id,
      );

      // If not in favorites, add it
      if (existingIndex === -1) {
        state.value.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      // Find index of the item to be removed
      const indexToRemove = state.value.findIndex(
        item => item.id === action.payload.id,
      );

      // If the item is in favorites, remove it
      if (indexToRemove !== -1) {
        state.value.splice(indexToRemove, 1);
      }
    },
  },
});

export const {addFavorite, removeFavorite} = favoriteSlice.actions;

export default favoriteSlice.reducer;

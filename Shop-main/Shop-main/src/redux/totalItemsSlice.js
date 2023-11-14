import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0, 
};

const totalItemsSlice = createSlice({
  name: 'totalItems',
  initialState,
  reducers: {
    incrementTotalItems: state => {
      state.count += 1;
    },
  },
});

export const { incrementTotalItems } = totalItemsSlice.actions;
export default totalItemsSlice.reducer;
